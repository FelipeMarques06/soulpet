const Pet = require('../models/Pet')

class PetController {

    static async addPet(req, res) {
        const { nome, raca, cor, idade, status } = req.body
        const pet = Pet({ nome, raca, cor, idade, status });
        await pet.save(); //solicitação remota ao banco

        res.status(201).json({ message: 'Pet criado com sucesso' })
    }

    static async listarPet(req, res) {

        const pets = await Pet.find().lean();
        res.json(pets);
    }
    // Edit Pet
    static async editPet(req, res) {
        const {id} = req.params;
        const { nome, raca, cor, idade, status } = req.body;
        await Pet.findByIdAndUpdate(id, { nome, raca, cor, idade, status });

        res.status(201).json({ message: 'Pet atualizado com sucesso!' })
    }
}

module.exports = PetController