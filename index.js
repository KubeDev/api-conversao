const express = require('express');
const os = require('os')
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); 

app.get('/temperatura/fahrenheitparacelsius/:valor', (req, res) => {

    let valor = req.params.valor;
    let celsius = (valor - 32) * 5 / 9;
    res.json({ "celsius": celsius, "maquina": os.hostname() });
});

app.get('/temperatura/celsiusparafahrenheit/:valor', (req, res) => {

    let valor = req.params.valor;
    let fahrenheit = (valor * 9 / 5) + 32;
    res.json({ "fahrenheit": fahrenheit, "maquina": os.hostname() });
});

app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080");
});
