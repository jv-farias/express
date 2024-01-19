var express = require("express");
var app = express();

app.get("/", function (req, res) {
    console.log('header', req.headers)
    const json = JSON.stringify({
        nome: req.query.nome,
        idade: req.query.idade
    })

    res.send(json);
})


app.listen(3000, function () {
    console.log("App de Exemplo escutando na porta 3000!");
    console.log("Exemplo: localhost:3000/?nome=Joao&idade=20")
});

const cors = require('cors');
app.use(cors({
    origin: 'https://www.section.io'
}));