var express = require('express');
var router = express.Router();
const NodeHog = require('nodehog');

let isHealth = true;
let readTime = new Date(Date.now());
let isRead = () => { 
    return readTime < new Date(Date.now());
};

router.put('/stress/tempo/:tempoStress/intervalo/:intervalo/ciclos/:ciclos', (req, res) => {

    const elemento = 'cpu';
    const tempoStress = req.params.tempoStress * 1000;
    const tempoFolga = req.params.tempoFolga * 1000;
    const ciclos = req.params.ciclos;
    new NodeHog(elemento, tempoStress, tempoFolga, ciclos).start();
    res.send("OK");
});

router.get('/ready', (req, res) => {
   
    if (isRead()) {
        res.statusCode = 200;
        res.json({ "value": "yes" });  
    } else {
        res.statusCode = 500;
        res.json({ "value": "no" });  
    }   
});

router.get('/health', (req, res) => {
    res.json({ "value": "yes" });  
});

router.put('/unhealth', (req, res) => {

    isHealth = false;
    res.json({ "value": "yes" });  
});

router.put('/unreadyfor/:seconds', (req, res) => {
    
    const load = new Date(new Date(Date.now()).getTime() + (1000 * req.params.seconds));
    readTime = load;  
    res.statusCode = 200;  
    res.json({ "value": "yes" });  
});

var healthMid = function (req, res, next) {
    
    if (isHealth) {
        next();
    } else {
        res.statusCode = 500;
        return res.send('');
    }   
};

exports.routers = router;
exports.middlewares = { healthMid};