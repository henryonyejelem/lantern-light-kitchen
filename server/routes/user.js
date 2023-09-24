const express = require('express')
const router = express.Router()

const UserModel = require('../models/User.js')
const ChefModel = require('../models/Chef.js')
const MenuModel = require('../models/Menu.js')

router.get('/', (req, res) => {
    res.sendStatus(200)
})

router.get('/signin', (req, res) => {    
    res.sendStatus(200)
})

router.get('/signup', (req, res) => {  
    res.sendStatus(200)
})

router.post('/signin', (req, res) => { 
    console.log(req.body)
    const {email, password} = req.body;       
    UserModel.findOne({email : email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.send(true);
                console.log("Successful Signin");
            }
            else{
                res.send(false);
                console.log("Failed Signin");
            }
        }
        else{
            res.send(false);
            console.log("Failed Signin");
        }
    })    
})

router.post('/signup', (req, res) => {
    console.log('Creating User: ')
    console.log(req.body)    
    UserModel.create(req.body)

    res.send(true)    
})

router.put('/checkout/chef/:item', (req, res) => {
    console.log('Adding Item: ')
    
    console.log(req.body)

    let count = 0;
    let item = req.params.item;
    const { email } = req.body; 

    ChefModel.findOne({
        name: item
    })
    .then(chef => {
        UserModel.findOne({email : email})
        .then((result) => {
            let found = result.checkout.find(e => e.name === chef.name)
            if(found){
                UserModel.updateOne({email : email},
                {$inc: {
                    "checkout.$[el].count" : 1 
                }},
                {arrayFilters: [{
                    "el.name" : chef.name
                }]
                    
                }                                  
                ).then(d => console.log(d))              
            }
            else{
                UserModel.updateOne(
                    {email: email},                    
                    {
                        $push:{checkout: {name : chef.name, description : chef.description, price : chef.price, count : 1}}      
                    }                     
                ).then(d => console.log(d))
            }
        })
    });
    res.sendStatus(200);
})


router.put('/checkout/menu/:item', (req, res) => {
    console.log('Adding Item: ')
    
    console.log(req.body)

    let count = 0;
    let item = req.params.item;
    const { email } = req.body; 

    MenuModel.findOne({
        name: item
    })
    .then(menu => {
        UserModel.findOne({email : email})
        .then((result) => {
            let found = result.checkout.find(e => e.name === menu.name)
            if(found){
                UserModel.updateOne({email : email},
                {$inc: {
                    "checkout.$[el].count" : 1 
                }},
                {arrayFilters: [{
                    "el.name" : menu.name
                }]
                    
                }                                  
                ).then(d => console.log(d))              
            }
            else{
                UserModel.updateOne(
                    {email: email},                    
                    {
                        $push:{checkout: {name : menu.name, description : menu.description, price : menu.price, count : 1}}      
                    }                     
                ).then(d => console.log(d))
            }
        })
    });
    res.sendStatus(200);
})

module.exports = router