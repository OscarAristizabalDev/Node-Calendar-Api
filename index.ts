import express from 'express';
import dotenv from 'dotenv'; // paquete requerido para acceder a las variables de entorno creadas en el archivo .env

// configuración requerida para el uso de variables de entorno
dotenv.config();

// Crear el servidor de express
const app = express();


// Directorio público
app.use(express.static('public'));

// Rutas
app.use('/api/auth', require('./routes/auth'));


// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});