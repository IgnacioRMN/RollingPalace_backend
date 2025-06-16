import express from "express";
import authRoutes from "../routes/auth.js";

export default class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;

    this.routes();
  }

  routes() {
    this.app.use("/api/auth", authRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`);
    });
  }
}
