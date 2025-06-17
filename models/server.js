import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnection from "../database/config.js";
import { notFound, errorHandler } from "../middlewares/manejoErrores.js";
import authRoutes from "../routes/auth.js";
import habitacionesRoutes from "../routes/habitacion.js";
import usuariosRoutes from "../routes/usuario.js";

dotenv.config();
dbConnection();

export default class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;

    this.middlewares();
    this.routes();
    this.errorHandlers();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/api/auth", authRoutes);
    this.app.use("/api/habitaciones", habitacionesRoutes);
    this.app.use("/api/usuarios", usuariosRoutes);
  }

  errorHandlers() {
    this.app.use(notFound);
    this.app.use(errorHandler);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`);
    });
  }
}
