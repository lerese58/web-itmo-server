const express = require('express');
const router = express.Router();
const db = require('../weatherDB');


router.route('/')
    .all((req, res, next) => {
        res.header('Access-Control-Allow-Origin', "*");
        res.header('Access-Control-Allow-Headers', "Content-Type");
        res.header('Access-Control-Allow-Methods', 'POST, GET, DELETE');
        next();
    })
    .get(async (req, res) => {
        try {
            const cityList = await db.any('select favorites from user_favorites')
            const list = []
            for (const i in cityList)
                list.push(cityList[i].favorites)
            res.json(list)
        } catch (e) {
            console.log(e)
            res.status(442).send()
        }

    })
    .post(async (req, res) => {
        try {
            const response = await
                db.none('insert into user_favorites values($1)', req.body['cityToAdd'])
            res.json(response)
        }
        catch (e) {
            console.log(e)
            res.status(443).send()
        }
    })
    .delete(async (req, res) => {
        try {
            const response = await
                db.none('delete from user_favorites where favorites = $1', req.body['cityToDelete'])
            res.json(response)
        }
        catch (e) {
            console.log(e)
            res.status(444).send()
        }
    })
    .options((req, res) => {
        res.header('Access-Control-Allow-Origin', "*");
        res.header('Access-Control-Allow-Headers', "Content-Type");
        res.header('Access-Control-Allow-Methods', 'POST, GET, DELETE');
        res.send()
    })


module.exports = router;
