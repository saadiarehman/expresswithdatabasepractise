const fabinociSeriesController = require("../controllers/fabinociSeriesController");

const router = require("express").Router();

router.post("/fabinocciSeries", fabinociSeriesController.fabinocciSeriesCheck);

module.exports = router;

