import express from "express";
import {
  crearReserva,
  obtenerMisReservas,
  obtenerTodasReservas,
  actualizarEstadoReserva,
  obtenerReservaPorId,
  eliminarReserva,
} from "../controllers/reservas.js";
import { proteger, esAdmin } from "../middlewares/auth.js";

const router = express.Router();

router.route("/mis-reservas").get(proteger, obtenerMisReservas);

router
  .route("/")
  .post(proteger, crearReserva)
  .get([proteger, esAdmin], obtenerTodasReservas);

router
  .route("/:id")
  .get(proteger, obtenerReservaPorId)
  .put([proteger, esAdmin], actualizarEstadoReserva)
  .delete([proteger, esAdmin], eliminarReserva);

router.route("/mis-reservas").get(proteger, obtenerMisReservas);

export default router;
