import express from "express";
import { check } from "express-validator";
import { registerUser, loginUser } from "../controllers/auth.js";

const router = express.Router();

router.post(
  "/register",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "Ingrese un email válido").isEmail(),
    check(
      "password",
      "La contraseña debe tener al menos 6 caracteres"
    ).isLength({ min: 6 }),
    check("isAdmin", "El rol debe ser booleano").optional().isBoolean(),
  ],
  registerUser
);

router.post(
  "/login",
  [
    check("email", "Ingrese un email válido").isEmail(),
    check("password", "La contraseña es obligatoria").exists(),
  ],
  loginUser
);

export default router;
