`use strict`;

const mongoose = require("mongoose");
const equipmentSchema = require("./equipment.model");

const userSchema = new mongoose.Schema({
    email: { type: String },
    equipment: [equipmentSchema],
});

const userModel = mongoose.model("users", userSchema);

const seedUserData = () => {
    const userAseel = new userModel({
        email: "mahmood.dinah2@gmail.com",
        equipment: [],
    });
    const userOsama = new userModel({
        email: "osama.alali89@gmail.com",
        equipment: [],
    });
    console.log(userAseel);
    userAseel.save();
    userOsama.save();
};

module.exports = { userModel, seedUserData };