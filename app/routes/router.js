const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.render("pages/index", {titulo:"Pagina inicial"})
});
router.get("/calculadora-tela-inicial", function (req, res) {
    res.render("pages/calculadora-tela-inicial", {titulo:"tela inicial da calculadora"})
module.exports = router;});