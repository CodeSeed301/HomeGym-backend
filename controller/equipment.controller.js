`use strict`;

const { userModel } = require("../models/user.model");

const getEquipment = (req, res) => {
    const { email } = req.query;

    userModel.findOne({ email: email }, (error, user) => {
        if (error) {
            res.send(error);
        } else {
            if (user == null) {
                user = new userModel({ email, equipment: [] });
                user.save();
            }
            res.json(user);
        }
    });
};



const creatEquipment = (request, response) => {
    
    const { email, title: title, id: id, quantity: quantity,price:price } = request.body;
    userModel.findOne({ email: email }, (error, userData) => {
        if (error) {
            response.send(error)
        } else {
            userData.equipment.push({ title: title, id: id, quantity: quantity,price:price });
            userData.save();
            response.json(userData);
        }
    })
}


const deleteEquipment = (req, res) => {
    const productIndex = req.params.product_idx;
    const { email } = req.query;
    if(productIndex==100){
        userModel.findOne(
            { email: email }, (error, userData) => {
    
                if (error) {
                    res.send(error);
                }
                else {
                    userData.equipment=[];
                    userData.save();
                    console.log('delete',userData)
                    res.json(userData);
                }
            })
    }else{userModel.findOne(
        { email: email }, (error, userData) => {

            if (error) {
                res.send(error);
            }
            else {
                userData.equipment.splice(productIndex, 1);
                userData.save();
                console.log('delete',userData)
                res.json(userData);
            }
        })}
    
}

const updateEquipment=(request,response)=>{
    const productIndex = request.params.product_idx;
    const { email, title: title, id: id, quantity: quantity,price:price } = request.body;
    console.log(email, "title:" ,title, "id:", id, "quantity:", quantity,"price:",price)
    userModel.findOne({email :email} , (error,userData)=>{
        if(error){
            response.send(error);
        }
        else{
            userData.equipment.splice(productIndex,1,{title: title, id: id, quantity: quantity,price:price});
            userData.save();
            console.log('update',userData)
            response.json(userData);        
        }
    })
}

module.exports = { getEquipment, creatEquipment, deleteEquipment,updateEquipment };