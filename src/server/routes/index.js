import express from 'express';
import userRoutes from './userRoutes.js';
import profileRoutes from './profileRoutes.js';

const registerRoutes = (app) => {
  app.use('/users', userRoutes);
  app.use('/profiles', profileRoutes);
};

export default registerRoutes;
