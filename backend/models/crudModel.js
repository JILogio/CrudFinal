import mongoose from "mongoose";

const playerSchema = mongoose.Schema(
    {
        nombre: {
          type: String,
          required: true,
        },
        posicion: {
          type: String,
          required: true,
        },
        edad: {
          type: Number,
          required: true,
        },
      },
      {
        timestamps: true,
      }

);

export const Player = mongoose.model('Player', playerSchema);
