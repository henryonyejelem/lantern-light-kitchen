const express = require('express')
const router = express.Router()
const reservationModel = require('../models/Reservation')

router.get('/', (req,res)=>{
    res.sendStatus(200)
})

router.post('/', (req,res)=>{
    reservationModel.create(req.body)
    .then(result => console.log(result))
    res.sendStatus(200)
})

module.exports = router