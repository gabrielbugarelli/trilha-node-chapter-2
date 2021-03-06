import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import swaggerUi from 'swagger-ui-express';

import './database';
import './shared/container';

import { router } from './routes';
import swaggerFile from './swagger.json';
import { AppError } from './errors/AppError';

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      message: error.message
    })
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server error ${error.message}`
  })
})

app.listen(8080, () => console.log("Application started on port 8080! 🚀"));