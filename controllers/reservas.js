import Reserva from "../models/reservas.js";
import Habitacion from "../models/habitacion.js";

// Crear reserva
export const crearReserva = async (req, res) => {
  try {
    const { habitacionId, fechaInicio, fechaFin } = req.body;
    const usuarioId = req.usuario._id;

    // Validar disponibilidad
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

    // Actualizar disponibilidad
    await Habitacion.findByIdAndUpdate(habitacionId, { disponible: false });

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

// Obtener todas las reservas
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

// Actualizar estado de una reserva
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

    // Lógica para actualizar disponibilidad de la habitación
    if (estado === "Cancelada") {
      await Habitacion.findByIdAndUpdate(reserva.habitacion, {
        disponible: true,
      });
    }
    if (estado === "Confirmada") {
      await Habitacion.findByIdAndUpdate(reserva.habitacion, {
        disponible: false,
      });
    }

    res.json({ message: `Reserva actualizada a ${estado}` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener una reserva por ID
export const obtenerReservaPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const reserva = await Reserva.findById(id)
      .populate("usuario", "nombre email")
      .populate("habitacion");
    if (!reserva) {
      return res.status(404).json({ message: "Reserva no encontrada" });
    }
    // Permitir solo si es admin
    if (
      !req.usuario.isAdmin &&
      reserva.usuario._id.toString() !== req.usuario._id.toString()
    ) {
      return res.status(403).json({ message: "No autorizado" });
    }
    res.json(reserva);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar una reserva
export const eliminarReserva = async (req, res) => {
  try {
    const { id } = req.params;
    const reserva = await Reserva.findById(id);
    if (!reserva) {
      return res.status(404).json({ message: "Reserva no encontrada" });
    }
    // Antes de eliminar, si la reserva está confirmada, liberar la habitación
    if (reserva.estado === "Confirmada") {
      await Habitacion.findByIdAndUpdate(reserva.habitacion, {
        disponible: true,
      });
    }
    await reserva.deleteOne();
    res.json({ message: "Reserva eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
