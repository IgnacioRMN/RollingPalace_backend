import express from "express";
import {
  crearHabitacion,
  obtenerHabitaciones,
  editarHabitacion,
  eliminarHabitacion,
} from "../controllers/habitacion.js";
import { proteger, esAdmin } from "../middlewares/auth.js";

const router = express.Router();

router
  .route("/")
  .post(proteger, esAdmin, crearHabitacion)
  .get(obtenerHabitaciones);

router
  .route("/:id")
  .put(proteger, esAdmin, editarHabitacion)
  .delete(proteger, esAdmin, eliminarHabitacion);

export default router;
