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

}

module.exports = VisitaController