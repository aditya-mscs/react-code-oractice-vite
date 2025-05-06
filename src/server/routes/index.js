import express from 'express';
import userRoutes from './userRoutes.js';
import profileRoutes from './profileRoutes.js';
import postRoutes from './postRoutes.js';

const registerRoutes = (app) => {
  app.use('/users', userRoutes);
  app.use('/profiles', profileRoutes);
  app.use('/posts', postRoutes);
};

export default registerRoutes;
