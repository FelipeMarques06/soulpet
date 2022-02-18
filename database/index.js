const mongoose = require('mongoose') // Conexão mongoose

async function main() {
    await mongoose.connect(process.env.MONGODB_URI); // Criando função
}

main().then(() => console.log("Conectado ao Mongo")) //
.catch((e) => console.log("Deu erro", e))

module.exports = mongoose