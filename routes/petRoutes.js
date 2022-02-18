const { Router } = require("express");
const PetController = require("../controllers/PetController")
const router = Router();

router.post('/add/pet',PetController.addPet)

module.exports = router
