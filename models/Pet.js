const { model, Schema, mongoose } = require("mongoose");

const adotanteSchema = mongoose.Schema(
  {
    nomeadotante: {type: String, required: true},
    rg: {type: String, required: true},
    endereco: {type: String, required: true}, 
  }
)

const Pet = model(
  "Pet",
  new Schema({
    nome: {type: String, required: true},
    raca: {type: String, required: true},
    cor: {type: String, required: true},
    idade: {type: String, required: true},
    adotado: {type: Boolean, required: true},
    adotante: {type: adotanteSchema}
  })
)


module.exports = Pet;