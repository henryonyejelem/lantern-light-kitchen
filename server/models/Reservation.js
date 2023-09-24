const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({    
    name: String,
    phoneNumber: String,
    nameumPeople: String,
    date: String,
    time: String,
    note: String,       
});

const reservationModel = mongoose.model('reservation', ReservationSchema);
module.exports = reservationModel;