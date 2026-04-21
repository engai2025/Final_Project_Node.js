 import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Finance Tracker API',
      version: '1.0.0',
      description: 'API documentation for the Finance Tracker Node.js project',
    },
    servers: [
      {
        // Replace with your actual Render URL
        url: 'https://final-project-node.onrender.com', 
        description: 'Production server (Render)',
      },
      {
        url: 'http://localhost:7000',
        description: 'Local development server',
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
  // This tells Swagger where to look for the @swagger comments
  apis: ['./routes/*.js'], 
};

export const swaggerSpec = swaggerJsdoc(options);