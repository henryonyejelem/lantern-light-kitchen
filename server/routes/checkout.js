const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const UserModel = require('../models/User.js')
const ChefModel = require('../models/Chef.js')

router.get('/', (req, res) => {    
    res.sendStatus(200)
})

router.get('/:email', (req, res) => {
    const email = req.params.email;
    let checkout = []

    UserModel.findOne({email : email})
    .then(result => {
        const checkout = result.checkout
        res.json(checkout)
    })   
    .catch(err=>console.log(err))
})

router.put('/:email/increment', (req, res) => {
    const email = req.params.email;
    const { itemName } = req.body;

    UserModel.findOne({email : email})
        .then((result) => {
            UserModel.updateOne({email : email},
            {$inc: {
                "checkout.$[el].count" : 1 
            }},
            {arrayFilters: [{
                "el.name" : itemName
            }]                    
            }                                  
            ).then(d => console.log(d))  
        }
    )
    res.sendStatus(200)
})

router.put('/:email/decrement', (req, res) => {
    const email = req.params.email;
    const { itemName } = req.body;

    UserModel.findOne({email : email})
        .then((result) => {
            UserModel.updateOne({email : email},
            {$inc: {
                "checkout.$[el].count" : -1 
            }},
            {arrayFilters: [{
                "el.name" : itemName
            }]                    
            }                                  
            ).then(d => console.log(d))  
        }
    )
    res.sendStatus(200)
})

router.put('/:email/delete', (req, res) => {
    const email = req.params.email;
    const { itemName } = req.body;
    
    UserModel.updateOne({email : email},
    {$pull: 
        {
            checkout : {name : itemName}                               
        }   
    }
    ).then(d => console.log(d))  
    res.sendStatus(200)
})

router.post('/:email/payment', (req, res) => {
    const email = req.params.email;
    console.log("Here")

    
    UserModel.updateOne({email : email},
    {$pull: 
        {
            checkout : {}                               
        }   
    }
    ).then(d => console.log(d))  
    res.sendStatus(200)
})

module.exports = router