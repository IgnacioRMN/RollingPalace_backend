import mongoose from "mongoose";

const reservaSchema = new mongoose.Schema(
  {
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
    fechaEntrada: Date,
    fechaSalida: Date,
    precioTotal: Number,
  },
  {
    timestamps: true,
  }
);

const Reserva = mongoose.model("Reserva", reservaSchema);

export default Reserva;
