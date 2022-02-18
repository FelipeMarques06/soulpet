const { model, Schema } = require("mongoose");

const Visita = model(
  "Visita",
  new Schema({
    data: {type: String, required: true},
    visitante: {type: String, required: true}
  })
)


module.exports = Visita;