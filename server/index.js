const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const ChefModel = require('./models/Chef.js')


const app = express();
app.use(cors());
app.use(express.json());

const url = "mongodb+srv://Admin:admin2001@projectclusters.vjtbori.mongodb.net/lanternlightkitchen?retryWrites=true&w=majority";
mongoose.connect(url);

const menuRouter = require('./routes/menu.js')
const userRouter = require('./routes/user.js')
const checkoutRouter = require('./routes/checkout.js')
const reservationRouter = require('./routes/reservation.js')

app.get('/', (req, res) => {
    res.sendStatus(200);
})

app.get('/chef', (req, res) => {
    ChefModel.find({})
    .then(chefs => res.json(chefs))
    .catch(err => res.json(err))
})

app.use("/menu", menuRouter)
app.use("/user", userRouter)
app.use("/checkout", checkoutRouter)
app.use("/reservation", reservationRouter)

app.listen(8000, () => {
    console.log("Server is Running");
})