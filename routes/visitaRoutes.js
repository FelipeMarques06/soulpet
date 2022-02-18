const { Router } = require("express");
const VisitaController = require("../controllers/VisitaController")
const router = Router();

router.post("/add/visita", VisitaController.addVisita);


module.exports = router