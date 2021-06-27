`use strict`

const { request, response } = require('express')
const {userModel} = require ('../models/user.model')

const getEqupiment = (req , res) =>{

 const {email} = req.query;

userModel.findOne({email: email},(error,user)=>{
 if (error) {
     res.send(error)
 } else {
     res.json(user)
 }
})
}

module.exports = getEqupiment ;