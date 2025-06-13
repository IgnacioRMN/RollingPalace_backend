import express from "express";

export default class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`);
    });
  }
}
