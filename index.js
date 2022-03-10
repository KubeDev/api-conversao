const express = require('express');
const os = require('os')
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
const config = require('./config/system-life');
const NodeHog = require('nodehog');

app.use(config.middlewares.healthMid);
app.use('/', config.routers);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); 

app.get('/fahrenheit/:valor/celsius', (req, res) => {

    let valor = req.params.valor;
    let celsius = (valor - 32) * 5 / 9;
    res.json({ "celsius": celsius, "maquina": os.hostname() });
});

app.get('/echo/:msg', (req, res) => {
    let password = 'teste';
    let msg = req.params.msg;
    res.json({ "txt-input": msg, "maquina": os.hostname() });
});

app.get('/swagger.yaml', (req, res) => {
    res.download(__dirname +'/swagger.yaml');
});

app.get('/openapi.yaml', (req, res) => {
    res.download(__dirname +'/openapi.yaml');
});

app.get('/celsius/:valor/fahrenheit', (req, res) => {

    let valor = req.params.valor;
    let fahrenheit = (valor * 9 / 5) + 32;
    res.json({ "fahrenheit": fahrenheit, "maquina": os.hostname() });
});

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

app.put('/stress/:elemento/tempostress/:tempoStress/intervalo/:intervalo/ciclos/:ciclos', (req, res) => {

    const elemento = req.params.elemento;
    const tempoStress = req.params.tempoStress * 1000;
    const tempoFolga = req.params.tempoFolga * 1000;
    const ciclos = req.params.ciclos;
    new NodeHog(elemento, tempoStress, tempoFolga, ciclos).start();
    res.json({"status": "Mission Accomplished" , "maquina": os.hostname() });
});

app.get('*', function(req, res) {
    res.redirect('/api-docs');
});

app.listen(8080, () => {
    console.log("Servidor: rodando na porta 8080, vai que vai");
});
