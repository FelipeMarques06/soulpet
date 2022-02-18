const { Router } = require("express");
const PetController = require("../controllers/PetController")
const router = Router();

router.post('/add/pet',PetController.addPet);

router.get('/pet', PetController.listarPet);

module.exports = router
