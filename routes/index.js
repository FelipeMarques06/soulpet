const { Router } = require("express");
const petRoutes = require("./petRoutes");

const router = Router();

router.use(petRoutes);

module.exports = router;



