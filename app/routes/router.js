var express = require("express");
var router = express.Router();
const { body, validationResult } = require('express-validator');
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

router.get('/', (req, res) => {
    res.redirect('/login');
});

// Rota para renderizar a página de login
router.get('/login', (req, res) => {
    res.render('login', { errors: [], formData: {} });
});

// Rota para processar o formulário de login
router.post('/login', [
    body('email').isEmail().withMessage('Por favor, insira um e-mail válido'),
    body('password').isLength({ min: 8 }).withMessage('A senha deve ter pelo menos 8 caracteres')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.render('login', {
            errors: errors.array(),
            formData: req.body
        });
    }

    // Simulação de sucesso no login (substitua por lógica real, como autenticação)
    console.log('Login bem-sucedido:', req.body);
    res.send('Login bem-sucedido!'); // Pode redirecionar ou renderizar outra página
});


module.exports = router;