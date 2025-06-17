import Usuario from "../models/usuario.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const registrarUsuario = async (req, res) => {
  const { nombre, email, contraseña, esAdmin } = req.body;

  try {
    // Verificar si usuario ya existe
    const usuarioExiste = await Usuario.findOne({ email });
    if (usuarioExiste) {
      return res.status(400).json({ message: "Usuario ya registrado" });
    }
    const conteoUsuarios = await Usuario.countDocuments();
    const estadoAdmin = conteoUsuarios === 0 ? true : esAdmin || false;

    const usuario = new Usuario({
      nombre,
      email,
      contraseña: bcrypt.hashSync(contraseña, 10),
      esAdmin: estadoAdmin,
    });

    const usuarioCreado = await usuario.save();

    res.status(201).json({
      _id: usuarioCreado._id,
      name: usuarioCreado.nombre,
      email: usuarioCreado.email,
      esAdmin: usuarioCreado.esAdmin,
      token: generarToken(usuarioCreado._id),
    });
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor" });
  }
};

export const loginUsuario = async (req, res) => {
  const { email, contraseña } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });

    // Verificar usuario y contraseña
    if (usuario && bcrypt.compareSync(contraseña, usuario.contraseña)) {
      res.json({
        _id: usuario._id,
        name: usuario.nombre,
        email: usuario.email,
        isAdmin: usuario.esAdmin,
        token: generarToken(usuario._id),
      });
    } else {
      res.status(401).json({ message: "Credenciales inválidas" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor" });
  }
};

// Generar JWT
const generarToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
