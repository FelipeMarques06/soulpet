const { Router } = require("express");
const VisitaController = require("../controllers/VisitaController")
const router = Router();

router.post("/add/visita", VisitaController.addVisita);
router.get("/visita",VisitaController.listarVisita);
router.post('/edit/visita/:id', VisitaController.editVisita);
router.post('/delete/visita/:id', VisitaController.deleteVisita);

module.exports = router