 import swaggerJSDoc from 'swagger-jsdoc';
 import dotenv from 'dotenv';
dotenv.config()
import path from 'path';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Finance Tracker API',
      version: '1.0.0',
      description: 'API Documentation',
    },
    servers: [
      {
        url: process.env.NODE_ENV == "development"? 'http://localhost:7000' : "https://final-project-node-js-i11z.onrender.com/",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
 
  apis: [path.resolve('./routes/*.js')],
};

const swaggerSpec = swaggerJSDoc(options);
export { swaggerSpec };