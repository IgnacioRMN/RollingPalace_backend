import jwt from "jsonwebtoken";
import User from "../models/usuario.js";

// proteger rutas y verificar token
export const protect = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader?.startsWith("Bearer")) {
    const token = authHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-contraseña");
      return next();
    } catch {
      return res.status(401).json({ message: "token invalido" });
    }
  }

  res.status(401).json({ message: "No se proporcionó un token" });
};

// Verificar si un usuario es administrador
export const admin = (req, res, next) => {
  return req.user?.isAdmin
    ? next()
    : res.status(403).json({ message: "Acceso no autorizado" });
};
