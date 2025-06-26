import mongoose from "mongoose";

const ReservaSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  habitacion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Habitacion",
    required: true,
  },
  fechaInicio: { type: Date, required: true },
  fechaFin: { type: Date, required: true },
  estado: {
    type: String,
    enum: ["Pendiente", "Confirmada", "Cancelada"],
    default: "Pendiente",
  },
  fechaCreacion: { type: Date, default: Date.now },
});

export default mongoose.model("Reserva", ReservaSchema);
