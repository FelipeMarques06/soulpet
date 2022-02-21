const { Router } = require("express");
const PetController = require("../controllers/PetController");
const Pet = require("../models/Pet");
const router = Router();

router.post('/add/pet', PetController.addPet);

router.get('/pet', PetController.listarPet);

router.post('/edit/pet/:id', PetController.editPet);

router.post('/delete/pet/:id', PetController.deletePet);

router.post('/add/adotante/:id', PetController.addAdotante);

module.exports = router
