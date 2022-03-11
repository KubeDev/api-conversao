var express = require('express');
var router = express.Router();

let isHealth = true;
let readTime = new Date(Date.now());
let isRead = () => { 
    return readTime < new Date(Date.now());
};

router.get('/ready', (req, res) => {
   
    if (isRead()) {
        res.statusCode = 200;
        return res.send('yes');
    } else {
        res.statusCode = 500;
        return res.send('');
    }   
});

router.get('/health', (req, res) => {
    if (isHealth) {
        next();
        return res.send('yes');
    } else {
        res.statusCode = 500;
        return res.send('no');
    }  
});

router.put('/unhealth', (req, res) => {

    isHealth = false;
    res.send("OK");
});

router.put('/unreadyfor/:seconds', (req, res) => {
    
    const dado = new Date(new Date(Date.now()).getTime() + (1000 * req.params.seconds));
    readTime = dado;    
    res.send("OK");
});


exports.routers = router;
exports.middlewares = { healthMid};
