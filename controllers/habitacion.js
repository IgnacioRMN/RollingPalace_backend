import Habitacion from "../models/habitacion.js";

export const crearHabitacion = async (req, res) => {
  try {
    const { numeroHabitacion, tipoHabitacion, precio, descripcion, imagen } =
      req.body;

    const habitacion = new Habitacion({
      numeroHabitacion,
      tipoHabitacion,
      precio,
      descripcion,
      imagen,
    });

    const habitacionCreada = await habitacion.save();
    res.status(201).json(habitacionCreada);
  } catch (error) {
    res.status(500).json({ message: "Error al crear habitación" });
  }
};

export const obtenerHabitaciones = async (req, res) => {
  try {
    const habitaciones = await Habitacion.find({});
    res.json(habitaciones);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener habitaciones" });
  }
};

export const editarHabitacion = async (req, res) => {
  try {
    const {
      numeroHabitacion,
      tipoHabitacion,
      precio,
      descripcion,
      imagen,
      disponible,
    } = req.body;

    const habitacion = await Habitacion.findById(req.params.id);

    if (habitacion) {
      habitacion.numeroHabitacion =
        numeroHabitacion || habitacion.numeroHabitacion;
      habitacion.tipoHabitacion = tipoHabitacion || habitacion.tipoHabitacion;
      habitacion.precio = precio || habitacion.precio;
      habitacion.descripcion = descripcion || habitacion.descripcion;
      habitacion.imagen = imagen || habitacion.imagen;
      habitacion.disponible =
        disponible !== undefined ? disponible : habitacion.disponible;

      const habitacionEditada = await room.save();
      res.json(habitacionEditada);
    } else {
      res.status(404).json({ message: "Habitación no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar habitación" });
  }
};

export const eliminarHabitacion = async (req, res) => {
  try {
    const habitacion = await Habitacion.findById(req.params.id);

    if (habitacion) {
      await habitacion.deleteOne();
      res.json({ message: "Habitación eliminada" });
    } else {
      res.status(404).json({ message: "Habitación no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar habitación" });
  }
};
