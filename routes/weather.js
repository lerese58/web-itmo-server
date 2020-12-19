const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const apiKey = '9e3a90d56e10f19c119dfefd3f59ead8'

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "Content-Type");
    res.header('Access-Control-Allow-Methods', 'POST, GET, DELETE');
    next();
})

router.get('/city', (req, res) => {
    const cityName = decodeURIComponent(req.query.q)
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&units=metric&lang=RU&appid=${apiKey}`)
        .then(value => value.json()
            .then(weather => res.json(weather)))
});

router.get('/coordinates', (req, res) => {
    const [lon, lat] = [req.query.lon, req.query.lat]
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=RU&appid=${apiKey}`)
        .then(value => value.json()
            .then(weather => res.json(weather)))
});

router.get('/icon', (req, res) => {
    const scale = +req.query.scale
    const iconCode = req.query.iconCode
    const scaleURL = scale > 1 ? `@${scale}x` : ''

    res.send(`//openweathermap.org/img/wn/${iconCode}${scaleURL}.png`)
});


module.exports = router;
