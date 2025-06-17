import Usuario from "../models/usuario.js";

export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find().select("-contraseña");
    res.json(usuarios);
  } catch {
    res.status(500).json({ message: "Error al obtener usuarios" });
  }
};

export const actualizarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario)
      return res.status(404).json({ message: "Usuario no encontrado" });

    usuario.nombre = req.body.nombre || usuario.nombre;
    usuario.email = req.body.email || usuario.email;
    usuario.esAdmin =
      req.body.esAdmin !== undefined ? req.body.esAdmin : usuario.esAdmin;

    const usuarioActualizado = await usuario.save();

    res.json({
      _id: usuarioActualizado._id,
      name: usuarioActualizado.nombre,
      email: usuarioActualizado.email,
      isAdmin: usuarioActualizado.esAdmin,
    });
  } catch {
    res.status(500).json({ message: "Error al actualizar datos del usuario" });
  }
};

export const elminarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario)
      return res.status(404).json({ message: "Usuario no encontrado" });

    await usuario.deleteOne();
    res.json({ message: "Usuario eliminado" });
  } catch {
    res.status(500).json({ message: "Error al eliminar usuario" });
  }
};
