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



const creatEquipment = (request, response) => {
    const { email, title: title, id: id, quantity: quantity } = request.body;
    userModel.findOne({ email: email }, (error, userData) => {
        if (error) {
            response.send(error)
        } else {
            userData.equipment.push({ title: title, id: id, quantity: quantity });
            userData.save();
            response.json(userData);
        }
    })
}


const deleteEquipment = (req, res) => {
    const productIndex = req.params.product_idx;
    const { email } = req.query;
    userModel.findOne(
        { email: email }, (error, userData) => {

            if (error) {
                res.send(error);
            }
            else {
                userData.equipment.splice(productIndex, 1);


                userData.save();


                res.json(userData);
            }
        })
}

const updateEquipment=(request,response)=>{
    const productIndex = request.params.product_idx;
    const { email, title: title, id: id, quantity: quantity } = request.body;
    userModel.findOne({email :email} , (error,userData)=>{
        if(error){
            response.send(error);
        }
        else{
            userData.equipment.splice(productIndex,1,{title: title, id: id, quantity: quantity});
            userData.save();
            response.json(userData);        
        }
    })
}

module.exports = { getEquipment, creatEquipment, deleteEquipment,updateEquipment };