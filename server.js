const express = require("express");
const { init, isMaster } = require('./src/cluster/cluster');

const initFib = require("./src/fibFun");

if (isMaster) {
    init();
} else {
    const app = express();

    app.get('/', (req, res) => {
        const num = req.query.num || 0;
        const result = initFib(num);
        res.send(result);
    });

    app.get('/quick', (req, res) => {
        const result = initFib(10);
        res.send(result);
    });

    app.get('/fast', (req, res) => {
        const result = initFib(20);
        res.send(result);
    });

    app.get('/mid', (req, res) => {
        const result = initFib(30);
        res.send(result);
    });

    app.get('/slow', (req, res) => {
        const result = initFib(44);
        res.send(result);
    });

    app.get('/slower', (req, res) => {
        const result = initFib(50);
        res.send(result);
    });

    app.listen(3001, () => console.log("Express App is running on PORT : 3001"));
}

