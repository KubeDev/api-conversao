const express = require('express');
const app = express();

app.get('/temperatura/fahrenheitparacelsius/:valor', (req, res) => {

    let valor = req.params.valor;
    let celsius = (valor - 32) * 5 / 9;
    res.json({ "celsius": celsius });
});


app.get('/temperatura/celsiusparafahrenheit/:valor', (req, res) => {

    let valor = req.params.valor;
    let fahrenheit = (valor * 9 / 5) + 32;
    res.json({ "fahrenheit": fahrenheit });
});

app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080");
});
