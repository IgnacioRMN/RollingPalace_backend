import mongoose from "mongoose";

const HabitacionSchema = new mongoose.Schema(
  {
    numeroHabitacion: {
      type: String,
      required: true,
      unique: true,
    },
    tipoHabitacion: {
      type: String,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
    },
    descripcion: String,
    imagen: String,
    disponible: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Habitacion = mongoose.model("Habitacion", HabitacionSchema);

export default Habitacion;
