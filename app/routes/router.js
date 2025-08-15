var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    res.render("index", {titulo:"Pagina inicial"})
});
router.get("/calculadora-tela-inicial", function (req, res) {
    res.render("calculadora-tela-inicial", {titulo:"tela inicial da calculadora"})
});

router.get("/ecoloja", function (req, res) {
    res.render("ecoloja", {titulo:"tela inicial da ecoloja"})
});
router.get("/entrada", function (req, res) {
    res.render("entrada", {titulo:"entrada"})
});

module.exports = router;