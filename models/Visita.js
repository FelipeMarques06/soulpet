const { model, Schema } = require("mongoose");

const Visita = model(
  "Visita",
  new Schema({
    data: {type: Date, required: true},
    visitante: {type: String, required: true}
  })
)


module.exports = Visita;