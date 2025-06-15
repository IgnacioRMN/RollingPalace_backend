import express from "express";
import {
  obtenerUsuarios,
  actualizarUsuario,
  eliminarUsuario,
} from "../controllers/usuario.js";
import { proteger, esAdmin } from "../middlewares/auth.js";

const router = express.Router();

router.route("/").get(proteger, esAdmin, obtenerUsuarios);

router
  .route("/:id")
  .put(proteger, esAdmin, actualizarUsuario)
  .delete(proteger, esAdmin, eliminarUsuario);

export default router;
