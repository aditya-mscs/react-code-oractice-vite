import express from 'express';
import Profile from '../models/mongo/profile.js';
import { validateBody } from '../middleware/validateBody.js';
import { profileSchema } from '../schemas/profileSchema.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    profile
      ? res.json(profile)
      : res.status(404).json({ error: 'Profile not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', validateBody(profileSchema), async (req, res) => {
  try {
    const profile = await Profile.create(req.body);
    res.status(201).json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', validateBody(profileSchema), async (req, res) => {
  try {
    const profile = await Profile.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    profile
      ? res.json(profile)
      : res.status(404).json({ error: 'Profile not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const profile = await Profile.findByIdAndDelete(req.params.id);
    profile
      ? res.json({ message: 'Profile deleted' })
      : res.status(404).json({ error: 'Profile not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;