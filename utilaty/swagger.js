 import swaggerJSDoc from 'swagger-jsdoc';
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
        url: 'http://localhost:7000',
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