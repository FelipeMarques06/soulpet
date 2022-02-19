const Visita = require("../models/Visita");
const Pet = require('../models/Pet')

class VisitaController {

    static async addVisita(req, res) {
        const { data, visitante,pet} = req.body
        const visita = Visita({ data, visitante,pet});
        await visita.save(); //solicitação remota ao banco

        res.status(201).json({ message: 'Visita adicionada com sucesso' })
    }

    static async listarVisita(req, res) {

        const visitas = await Visita.find().populate('pet').lean();
        res.json(visitas);
    }

    static async editVisita(req, res) {
        const {id} = req.params;
        const { data, visitante } = req.body;
        await Visita.findByIdAndUpdate(id, { data, visitante });

        res.status(201).json({ message: 'Visita atualizada com sucesso!' })
    }

    static async deleteVisita(req, res) {
        const { id } = req.params;
        await Visita.findByIdAndDelete(id);
        
        res.status(201).json({message: 'Visita deletada com sucesso!'})
      }

}

module.exports = VisitaController