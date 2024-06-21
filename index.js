const express = require('express');
const swaggerUi = require('swagger-ui-express');
const specs = require('./swagger');

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
  console.log(`Documentación disponible en http://localhost:${port}/api-docs`);
});
 