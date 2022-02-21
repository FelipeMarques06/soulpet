const Pet = require('../models/Pet')

class PetController {

    static async addPet(req, res) {
        const { nome, raca, cor, idade, adotado } = req.body
        const pet = Pet({ nome, raca, cor, idade, adotado });
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
        const { nome, raca, cor, idade, adotado, adotante } = req.body;
        await Pet.findByIdAndUpdate(id, { nome, raca, cor, idade, adotado, adotante });

        res.status(201).json({ message: 'Pet atualizado com sucesso!' })
    }

    static async deletePet(req, res) {
        const { id } = req.params;
        await Pet.findByIdAndDelete(id);
        
        res.status(201).json({message: 'Pet deletado com sucesso!'})
      }

      static async addAdotante(req, res) {
        const {id} = req.params;
        const { adotante } = req.body;

        await Pet.findByIdAndUpdate(id, { adotante, adotado: true });

        res.status(201).json({ message: 'Pet adotado com sucesso!' })
    }
}

module.exports = PetController