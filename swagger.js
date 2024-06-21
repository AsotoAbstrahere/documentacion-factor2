const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    servers: [
        {
            url: "https://api.factor2.cl/qa"
        }
    ],
    info: {
      title: 'API de Ejemplo',
      version: '1.0.0',
      description: 'Documentación de API generada con swagger-jsdoc',
    }
  },
  apis: ['./docs/**/*.yaml'], // Asegúrate de que esta ruta es correcta
};

const specs = swaggerJsdoc(options);

module.exports = specs;
