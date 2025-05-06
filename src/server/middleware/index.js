import express from 'express'; import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import logger from './logger.js';

// Middleware initializer function
export const applyMiddlewares = (app) => {
  // Security headers
  app.use(helmet());

  // Enable CORS for all origins (customize as needed)
  app.use(cors());

  // Logging
  // app.use(morgan('dev')); //-------> POST /profiles 201 44.788 ms - 73

  // Custom logger middleware
  app.use(logger); // applies logging to all incoming requests

  // Gzip compression
  app.use(compression());

  // JSON and URL-encoded parsing
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Rate limiting
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  });
  app.use(limiter);

  // XSS protection
  // app.use(xss());
  //ypeError: Cannot set property query of #<IncomingMessage> which has only a getter
  // This is a known compatibility issue with the xss-clean middleware when used with ES modules (type: "module") and modern Express versions.

};
