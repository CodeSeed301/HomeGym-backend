`use strict`;

const { userModel } = require("../models/user.model");

const getEquipment = (req, res) => {
    const { email } = req.query;

    userModel.findOne({ email: email }, (error, user) => {
        if (error) {
            res.send(error);
        } else {
            res.json(user);
        }
    });
};



const creatEquipment = (request, response)=> {
    const { email, title: title ,  id:id , quantity: quantity  } = request.body;
    userModel.findOne({ email: email }, (error, userData) => {
        if (error) {
            response.send(error)
        } else {
            userData.equipment.push({ title: title ,  id:id , quantity: quantity });
            userData.save();
            response.json(userData);
        }
    })
}

module.exports = {getEquipment, creatEquipment };