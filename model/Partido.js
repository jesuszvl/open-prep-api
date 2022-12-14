const mongoose = require("mongoose");

const partidoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    max: 255,
  },
  siglas: {
    type: String,
    required: true,
    min: 1,
    max: 255,
  },
  logotipo: {
    type: String,
    required: [true, "Image field is required."],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Partido", partidoSchema);
