const path = require('path');
const express = require('express');
const app = express();
const porta = 3000;

app.use(express.static(path.join(__dirname, 'app', 'public')));

app.set('view engine', 'ejs');
app.set('views', './app/views/pages');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const rota = require("./app/routes/router");
app.use("/", rota);

const cadastroRouter = require('./app/routes/cadastro');
app.use('/cadastro', cadastroRouter);

app.listen(porta, ()=>{
    console.log(`Servidor online!\n http://localhost:${porta}`);
})
