
`use strict`

const mongoose = require('mongoose');
const equipmentSchema = require('./equipment.model');


const userShema = new mongoose.Schema({
email : {type : String},
equipment: [equipmentSchema]
});

const userModel = mongoose.model('users',userShema)

const seedUserData = () => {
    const userAseel = new userModel({
        email: "archaseel.1992@gmail.com",
        equipment: [],
        
    });
    const userOsama = new userModel({
        email: "osama.alali89@gmail.com",
        equipment: [],
        
    });
    console.log(userAseel)
  userAseel.save();
  userOsama.save();

}

module.exports = {userModel, seedUserData} ;