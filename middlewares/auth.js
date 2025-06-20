import jwt from "jsonwebtoken";
import Usuario from "../models/usuario.js";

// proteger rutas y verificar token
export const proteger = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader?.startsWith("Bearer")) {
    const token = authHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.usuario = await Usuario.findById(decoded.id).select("-contraseña");
      return next();
    } catch {
      return res.status(401).json({ message: "token invalido" });
    }
  }

  res.status(401).json({ message: "No se proporcionó un token" });
};

// Verificar si un usuario es administrador
export const esAdmin = (req, res, next) => {
  return req.usuario?.esAdmin
    ? next()
    : res.status(403).json({ message: "Acceso no autorizado" });
};
