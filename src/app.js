// Importaciones
const express = require('express');
const { initializeAuthentication } = require('./auth/auth');
const { errorHandlerMiddleware } = require('./middlewares/error-handler');
const bookRoutes = require('./routes/book-routes')
const libraryRoutes = require('./routes/library-routes');
const userRoutes = require('./routes/user-routes');

const app = express();
const PORT = 5000;

initializeAuthentication();

// Middleware para parsear los cuerpos de las peticiones
app.use(express.json());

// Paths
app.use("/book", bookRoutes);
app.use("/library", libraryRoutes);
app.use("/user", userRoutes);

// Middlewares
app.use(errorHandlerMiddleware);

app.listen(PORT, () => {
  console.log("API corriendo en el puerto " + PORT);
});