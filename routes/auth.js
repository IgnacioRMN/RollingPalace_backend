import express from "express";
import { check } from "express-validator";
import { registrarUsuario, loginUsuario } from "../controllers/auth.js";

const router = express.Router();

router.post(
  "/register",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("email", "Ingrese un email válido").isEmail(),
    check(
      "contraseña",
      "La contraseña debe tener al menos 6 caracteres"
    ).isLength({ min: 6 }),
    check("esAdmin", "El rol debe ser booleano").optional().isBoolean(),
  ],
  registrarUsuario
);

router.post(
  "/login",
  [
    check("email", "Ingrese un email válido").isEmail(),
    check("contraseña", "La contraseña es obligatoria").exists(),
  ],
  loginUsuario
);

export default router;
