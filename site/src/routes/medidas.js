var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idAquario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});
router.get("/buscarescudo/:idAquario", function (req, res) {
    medidaController.buscarescudo(req, res);
});
 router.get("/obitersorteio/:idusuario", function (req, res) {
    medidaController.obitersorteio(req, res);
});
router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;