import express from "express";
import {
  obtenerUsuarios,
  actualizarUsuario,
  elminarUsuario,
} from "../controllers/usuario.js";
import { proteger, esAdmin } from "../middlewares/auth.js";

const router = express.Router();

router.route("/").get(proteger, esAdmin, obtenerUsuarios);

router
  .route("/:id")
  .put(proteger, esAdmin, actualizarUsuario)
  .delete(proteger, esAdmin, elminarUsuario);

export default router;
