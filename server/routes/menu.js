const express = require('express')
const router = express.Router()
const MenuModel = require('../models/Menu.js')


router.get('/', (req, res) => {
    res.sendStatus(200)
})

router.get('/:item', (req, res) => {
    //res.send(req.params.item);
    MenuModel.find({ category : req.params.item})
    .then(items => res.json(items))
    .catch(err => res.json(err))
    
})

module.exports = router