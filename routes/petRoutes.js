const { Router } = require("express");
const PetController = require("../controllers/PetController")
const router = Router();

router.post('/add/pet', PetController.addPet);

router.get('/pet', PetController.listarPet);

router.post('/edit/pet/:id', PetController.editPet);

module.exports = router
