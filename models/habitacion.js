import mongoose from "mongoose";

const HabitacionSchema = new mongoose.Schema({
  tipo: {
    type: String,
    required: true,
    enum: ["individual", "doble", "suite"],
  },
  precio: {
    type: Number,
    required: true,
  },
  disponible: {
    type: Boolean,
    default: true,
  },
  descripcion: {
    type: String,
    trim: true,
  },
});

const Habitacion = mongoose.model("Habitacion", HabitacionSchema);

export default Habitacion;
