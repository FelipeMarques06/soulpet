const Visita = require("../models/Visita");

class VisitaController {
    static async addVisita(req, res) {
        const { data, visitante} = req.body
        const visita = Visita({ data, visitante });
        await visita.save(); //solicitação remota ao banco

        res.status(201).json({ message: 'Visita adicionada com sucesso' })
    }

}

module.exports = VisitaController