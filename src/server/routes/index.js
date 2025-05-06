import User from '../models/sql/user.js';
import Profile from '../models/mongo/profile.js';

const registerRoutes = (app) => {
  // ----- USERS (PostgreSQL) -----

  // GET all users
  app.get('/users', async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // GET user by ID
  app.get('/users/:id', async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      user ? res.json(user) : res.status(404).json({ error: 'User not found' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // POST create user
  app.post('/users', async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // PUT update user
  app.put('/users/:id', async (req, res) => {
    try {
      const [updated] = await User.update(req.body, {
        where: { id: req.params.id }
      });
      updated
        ? res.json({ message: 'User updated' })
        : res.status(404).json({ error: 'User not found' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // DELETE user
  app.delete('/users/:id', async (req, res) => {
    try {
      const deleted = await User.destroy({ where: { id: req.params.id } });
      deleted
        ? res.json({ message: 'User deleted' })
        : res.status(404).json({ error: 'User not found' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });


};

export default registerRoutes;