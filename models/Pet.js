const { model, Schema } = require("mongoose");

const Pet = model(
  "Pet",
  new Schema({
    nome: {type: String, required: true},
    raca: {type: String, required: true},
    cor: {type: String, required: true},
    idade: {type: String, required: true},
    status: {type: Boolean, required: true},

  })
)


module.exports = Pet;