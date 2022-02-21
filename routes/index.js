const { Router } = require("express");
const petRoutes = require("./petRoutes");
const visitaRoutes = require("./visitaRoutes");

const router = Router();

router.use(petRoutes);
router.use(visitaRoutes);
router.use((req, res, next) => {
    res.status("404").json({ message: "Página não encontrada!" })
});

module.exports = router;



