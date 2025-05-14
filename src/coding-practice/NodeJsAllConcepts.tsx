/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-require-imports */
//@ts-nocheck



//⚠️ Things to Watch Out For
//In ES module, No require.cache, module.exports, or __filename (by default)



// ========================================
// ✅ 1. MODULE SYSTEM
// ========================================

// 📦 CommonJS
// utils.js
const greet = name => `Hello, ${name}`;
module.exports = greet; // __________ Export default

// or named exports:
module.exports = { //  __________ module.exports
  greet,
  add: (a, b) => a + b
};

// main.js
const greet = require('./utils');          // default
const { greet, add } = require('./utils'); // named





// 📦 ES Modules
// Must add in package.json: { "type": "module" }

// utils.js
export default function greet(name) {
  return `Hello, ${name}`;
}
export const add = (a, b) => a + b;

// main.js
import greet from './utils.js';           // default //Use .js Extensions in Imports (if using relative paths)
import { add } from './utils.js';         // named




// ========================================
// ✅ 2. FILE SYSTEM (fs)
// ========================================


// CommonJS Globals
console.log(__dirname, __filename);


// 📦 ES Modules
import { fileURLToPath } from 'url'; //______________ fileURLToPath(import.meta.url) from url / path.direname
const __filename = fileURLToPath(import.meta.url);

import path from 'path';
const __dirname = path.dirname(__filename);



// ==========================================
// ✅ 12. PROCESS / GLOBALS
// ==========================================
console.log(process.argv);            // CLI args
console.log(process.env.NODE_ENV === 'developement');    // Environment
process.on('SIGINT', () => process.exit());



// ==========================================
// ✅ 3. FILE SYSTEM
// ==========================================

// 📦 CommonJS or ESM
const fs = require('fs'); //_________ readFile / 'utf-8' / (err,data) / writeFileSync
fs.readFile('./input.txt', 'utf-8', (err, data) => {
  console.log(data);
});
fs.writeFileSync('./out.txt', 'Hello world written in out.txt file');


// ==========================================
// ✅ 10. STREAMS
// ==========================================

const fs = require('fs'); // OR import fs from 'fs';
const r = fs.createReadStream('./input.txt');
const w = fs.createWriteStream('./output.txt');
r.pipe(w);







// ==========================================
// ✅ 4. HTTP SERVER
// ==========================================

const http = require('http'); //OR import http from 'http'; //__________ http.createServer
const server = http.createServer((req, res) => {
  res.send('Hello world');
})

// ==========================================
// ✅ 5. EXPRESS SETUP
// ==========================================

const express = require('express'); //_______ app.use(express.json()) / app.listen(4000)
const app = express();
app.use(express.json()); // Parse JSON ________ body
app.get('/', (req, res) => res.send('Hello world'));
app.listen(4000);


// ==========================================
// ✅ 6. EVENTS
// ==========================================

const EventEmitter = require('events'); // ES module: import from ______ 'events' / 
const emitter = new EventEmitter();
emitter.on('data', (req, res) => {
  console.log('Data received:', req, res);
})
emitter.emit('data', { method: "GET", url: "/" }, { statusCode: 200, header: {} });
emiotter.on('ping', () => console.log('Pong'));


// ==========================================
// ✅ 7. PATH & OS MODULE
// ==========================================

const path = require('path'); // OR import path from 'path';
const os = require('os');     // OR import os from 'os';

console.log(path.basename('/a/b/c.txt'));
console.log(os.cpus().length);

// ==========================================
// ✅ 8. CHILD PROCESS
// ==========================================

const { exec } = require('child_process'); // import {exce} from "child_process";
exec('ls', (err, stdout) => {
  console.log(stdout);
})


// ==========================================
// ✅ 9. CLUSTER
// ==========================================

const cluster = require('cluster');
const os = require('os');

if (cluster.isPrimary || cluster.isMaster) {
  os.cpus().forEach(() => cluster.fork());
} else {
  console.log(`Worker ${process.id} running...`)
}


// ==========================================
// ✅ 11. BUFFER
// ==========================================

const buf = Buffer.from('hello');
console.log(buf.toString()); // 'hello'



/*
🔹 Built -in Core Modules
  •	fs
  •	path
  •	os
  •	http
  •	url
  •	child_process
  •	events
  •	stream
  •	buffer
  •	cluster
  •	process
  •	dns(optional)
  •	net(for TCP sockets)
  •	tls(secure sockets layer)
  •	zlib(gzip compression)

🔹 Async & Event Loop
  •	Callback
  •	Promises
  •	async/await
  •	setTimeout, setInterval, clearTimeout
  •	EventEmitter


🔹 File & Data I/O
  •	Read/write files (sync/async)
  •	JSON parsing/stringifying
  •	Buffer usage
  •	Streams & .pipe()

🔹 Process & Environment
  •	process.argv
  •	process.env
  •	process.exit
  •	SIGINT, signal handlers
  •	REPL usage (node CLI)
  •	Global variables (__dirname, __filename)
  •	process.nextTick() and setImmediate() — event loop micro/macro task queueing

🔹 Networking & HTTP
  •	Basic HTTP server with routing
  •	Express.js middleware, routing, error handling
  •	req, res, headers, query, body
  •	REST APIs with JSON payloads
  •	HTTPS setup with https module or certs
  •	WebSocket example (ws package or net/tls)



🔹 Testing
  •	Basic test setup with mocha, jest, or vitest
  •	Writing testable modules
  •	Assertion with assert or test libraries


🔹 Security & Best Practices
  •	Using helmet, rate-limiter, etc. with Express
  •	Avoiding sync functions in production
  •	Validating input (e.g., Joi, zod)
  •	Managing secrets with .env or HashiCorp Vault

🔹 Advanced Performance Topics (Optional)
  •	worker_threads for parallelism
  •	Profiling with node --inspect
  •	Load testing (e.g., autocannon, k6)
  •	Caching with Redis
  •	Building native C++ addons (node-gyp)





*/

// ✅ 1. TCP SERVER (net module)
import net from 'net';

const tcpServer = net.createServer(socket => {
  socket.write('Welcome to TCP server\n');
  socket.on('data', data => {
    console.log('Client:', data.toString());
    socket.write('You said: ' + data);
  });
});
tcpServer.listen(8080, () => console.log('TCP server on port 8080'));

// ✅ 2. COMPRESSION (zlib module)
import zlib from 'zlib';
import fs from 'fs';

const input = fs.createReadStream('big.txt');
const output = fs.createWriteStream('big.txt.gz');

input.pipe(zlib.createGzip()).pipe(output); // Compress

// To decompress:
fs.createReadStream('big.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('decompressed.txt'));

// ✅ 3. HTTPS SERVER (Self-signed SSL)
import https from 'https';
import path from 'path';
import { readFileSync } from 'fs';

const options = {
  key: readFileSync(path.resolve('./certs/key.pem')),
  cert: readFileSync(path.resolve('./certs/cert.pem'))
};

const httpsServer = https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('Secure Hello HTTPS');
});
httpsServer.listen(8443, () => console.log('HTTPS on 8443'));

// ✅ 4. WEBSOCKET SERVER (using 'ws' package)
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 3002 });
wss.on('connection', ws => {
  console.log('New WebSocket connection');
  ws.send('Welcome!');
  ws.on('message', msg => {
    console.log('Client:', msg.toString());
    ws.send(`Echo: ${msg}`);
  });
});

// ✅ 5. Event Loop: process.nextTick vs setImmediate
console.log('Start');

process.nextTick(() => console.log('nextTick 1'));     // Microtask queue
setImmediate(() => console.log('setImmediate 1'));     // Macrotask queue
Promise.resolve().then(() => console.log('Promise 1')); // Microtask

console.log('End');

// Output order: Start → End → nextTick → Promise → setImmediate

// ✅ 6. .env with dotenv
// .env file:
// PORT=4000
// SECRET_KEY=mysecret123

import dotenv from 'dotenv';
dotenv.config(); // Load variables from .env

console.log('PORT:', process.env.PORT);
console.log('SECRET_KEY:', process.env.SECRET_KEY);

// ✅ 7. Assertion & Testing Basics (Node.js built-in)
import assert from 'assert';

const sum = (a, b) => a + b;
assert.strictEqual(sum(2, 3), 5); // No error
// assert.strictEqual(sum(2, 2), 5); // Throws AssertionError

// ✅ 8. Using worker_threads (multi-threading)
import { Worker, isMainThread, parentPort } from 'worker_threads';

if (isMainThread) {
  const worker = new Worker(new URL('./worker.js', import.meta.url));
  worker.on('message', msg => console.log('From worker:', msg));
  worker.postMessage('Ping');
} else {
  parentPort.on('message', msg => {
    parentPort.postMessage('Pong from worker');
  });
}

// Create a file named worker.js next to this file
// with the following:
// import { parentPort } from 'worker_threads';
// parentPort.on('message', msg => parentPort.postMessage('Pong'));

// ✅ 9. Debugging
// Run your script with:
// node --inspect-brk index.js
// Then open: chrome://inspect in Chrome