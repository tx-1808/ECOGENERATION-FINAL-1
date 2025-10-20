const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/cadastro', { errors: {}, old: {} });
});

router.post(
  '/cadastro',
  [
    check('nome').notEmpty().withMessage('Nome é obrigatório'),
    check('email').isEmail().withMessage('Email inválido'),
    check('senha').isLength({ min: 6 }).withMessage('Senha deve ter pelo menos 6 caracteres'),
    check('sexo').notEmpty().withMessage('Campo é obrigatório'),
    check('descricao').notEmpty().withMessage('Descrição é obrigatória'),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const mappedErrors = errors.mapped();
      return res.render('pages/cadastro', { errors: mappedErrors, old: req.body });
    }
    // Aqui poderia salvar no banco ou processar os dados...
    res.render('pages/');
  }

  
);



module.exports = router;
