import { Router } from "express";
import {
  crearReserva,
  obtenerMisReservas,
  obtenerTodasReservas,
  actualizarEstadoReserva,
} from "../controllers/reservas.js";
import { proteger, esAdmin } from "../middlewares/auth.js";

const router = Router();

router.post("/", proteger, crearReserva);
router.get("/mis-reservas", proteger, obtenerMisReservas);
router.get("/", [proteger, esAdmin], obtenerTodasReservas);
router.put("/:id", [proteger, esAdmin], actualizarEstadoReserva);

export default router;
