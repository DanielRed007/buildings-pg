import express, { Application } from "express";
import cors, { CorsOptions } from "cors";
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import Routes from "./routes";

export default class Server {
  constructor(app: Application) {
    this.config(app);
    new Routes(app);
  }

  private config(app: Application): void {
    const corsOptions: CorsOptions = {
      origin: "http://localhost:8081"
    };

    const swaggerDefinition = require('../swagger.json');

    const options = {
      swaggerDefinition,
      apis: ['./src/routes/*.ts'], // Path to the API routes files
    };

    const swaggerSpec = swaggerJSDoc(options);

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
  }

}