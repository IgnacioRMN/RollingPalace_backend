import Reserva from "../models/reservas.js";
import Habitacion from "../models/habitacion.js";

// Crear reserva
export const crearReserva = async (req, res) => {
  try {
    const { habitacionId, fechaInicio, fechaFin } = req.body;
    const usuarioId = req.usuario._id;

    // Validar disponibilidad (puedes mejorar esta lógica)
    const reservasExistentes = await Reserva.find({
      habitacion: habitacionId,
      $or: [
        { fechaInicio: { $lte: fechaFin }, fechaFin: { $gte: fechaInicio } },
      ],
    });
    if (reservasExistentes.length > 0) {
      return res
        .status(400)
        .json({ message: "La habitación no está disponible en esas fechas." });
    }

    const reserva = new Reserva({
      usuario: usuarioId,
      habitacion: habitacionId,
      fechaInicio,
      fechaFin,
    });
    await reserva.save();
    res.status(201).json(reserva);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener reservas del usuario
export const obtenerMisReservas = async (req, res) => {
  try {
    const usuarioId = req.usuario._id;
    const reservas = await Reserva.find({ usuario: usuarioId }).populate(
      "habitacion"
    );
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener todas las reservas (solo admin)
export const obtenerTodasReservas = async (req, res) => {
  try {
    const reservas = await Reserva.find()
      .populate("usuario", "nombre email")
      .populate("habitacion");
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar estado de una reserva (solo admin)
export const actualizarEstadoReserva = async (req, res) => {
  try {
    const { id } = req.params;
    const { estado } = req.body;
    if (!["Pendiente", "Confirmada", "Cancelada"].includes(estado)) {
      return res.status(400).json({ message: "Estado no válido" });
    }
    const reserva = await Reserva.findById(id);
    if (!reserva) {
      return res.status(404).json({ message: "Reserva no encontrada" });
    }
    reserva.estado = estado;
    await reserva.save();
    res.json({ message: `Reserva actualizada a ${estado}` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
