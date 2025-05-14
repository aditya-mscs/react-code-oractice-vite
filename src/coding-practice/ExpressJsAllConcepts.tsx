/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-require-imports */
//@ts-nocheck


// ✅ 1. SETUP & INSTALL
// Run in terminal:
// npm init -y
// npm install express



// ✅ 2. BASIC SERVER
import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(3000, () => console.log('Server running on port 3000'));




// ✅ 3. MIDDLEWARE
// Runs before routes; used to parse, log, auth, etc.

app.use(express.json()); // Parse JSON ________ body
app.use(express.urlencoded({ extended: true })); // Parse ________ form data

// Custom middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Must call next() to continue
});



// ✅ 9. RESPONSE METHODS
// res.send('text')           → sends text or HTML
// res.json({})               → sends JSON
// res.status(404)            → sets status code
// res.redirect('/home')      → redirect
// res.set('X-Custom', 'ok')  → custom headers
// res.cookie()

// ✅ 10._________ PARAMS & QUERY
// Route param: /user/:id → req.params.id
// Query param: /user?name=Bob → req.query.name
// Body: req.body.name (after middleware)




// ✅ 4. ROUTING (GET, POST, PUT, DELETE)
app.get('/users', (req, res) => res.send('List users'));
app.post('/users', (req, res) => res.send('Create user'));
app.put('/users/:id', (req, res) => res.send(`Update user ${req.params.id}`));
app.delete('/users/:id', (req, res) => res.send(`Delete user ${req.params.id}`));




// ✅ 5. REQUEST & RESPONSE OBJECTS
app.get('/info', (req, res) => {
  const name = req.query.name || 'Guest';     // Query param ___________ req.query.name
  const agent = req.get('User-Agent');        // Header
  res.json({ name, agent });
});

app.post('/body', (req, res) => {
  console.log(req.body); // ________ req.body = JSON body
  res.send('Received!');
});




// ✅ 6. ROUTER (Modular Routing)
import { Router } from 'express';
const userRouter = Router(); //___________ const userRouter = Router();

userRouter.get('/', (req, res) => res.send('All users'));
userRouter.get('/:id', (req, res) => res.send(`User ${req.params.id}`));
app.use('/api/users', userRouter); // Route prefix: _________ /api/users




// ✅ 7. STATIC FILE SERVING
app.use(express.static('public')); // Serves files from ./public
// Access: http://localhost:3000/logo.png if public/logo.png exists





// ✅ 8. ERROR HANDLING
// Catch-all 404
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Custom error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});




// ✅ 11. ASYNC HANDLING (with try/catch)
app.get('/asyncApi', async (req, res, next) => { //__________ async before ()
  try {
    const data = await fetchSomeData(); // your async function
    res.json(data);
  } catch (err) {
    next(err); // forwards to error handler
  }
});


// ✅ 12. ENVIRONMENT VARIABLES //_________ process.env.PORT / dotenv.config()
// .env file:
// PORT=4000
import dotenv from 'dotenv';
dotenv.config();
app.listen(process.env.PORT);



// ✅ 13. SECURITY PRACTICES
// npm install helmet cors rate-limit

import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

app.use(helmet());               // Adds secure headers
app.use(cors());                 // Enables cross-origin requests
app.use(rateLimit({ windowMs: 60000, max: 100 })); // Limit: 100 req/min






// ✅ 14. COOKIE HANDLING
// npm install cookie-parser
import cookieParser from 'cookie-parser';
app.use(cookieParser());

app.get('/set', (req, res) => {
  res.cookie('token', 'abc123').send('Cookie set');
});

app.get('/get', (req, res) => {
  res.send(req.cookies.token);
});




// ✅ 15. SESSION HANDLING
// npm install express-session
import session from 'express-session';

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.get('/session', (req, res) => {
  req.session.views = (req.session.views || 0) + 1;
  res.send(`Views: ${req.session.views}`);
});






// ✅ 16. VALIDATION (with express-validator)
// npm install express-validator
import { body, validationResult } from 'express-validator';

app.post('/register',
  body('email').isEmail(), //____________ IMP
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    res.send('Valid email!');
  });





// ✅ 17. FILE UPLOAD (with multer)
// npm install multer
import multer from 'multer';
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('avatar'), (req, res) => {
  res.send(`File uploaded: ${req.file.originalname}`);
});


// ✅ 18. DEPLOYMENT PREP
// Add to package.json:
// "scripts": { "start": "node index.js" }
// Use process.env.PORT in production
// Use `pm2` or `forever` to keep it running
// Use Nginx + SSL reverse proxy in prod