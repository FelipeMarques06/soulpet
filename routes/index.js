const { Router } = require("express");
const petRoutes = require("./petRoutes");
const visitaRoutes = require("./visitaRoutes");

const router = Router();

router.use(petRoutes);
router.use(visitaRoutes);

module.exports = router;



