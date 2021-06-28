`use strict`;

const mongoose = require("mongoose");

const equipmentSchema = new mongoose.Schema({
    title: { type: String },
    id: { type: Number },
    quantity: { type: Number },
    price:{type:Number}
});

module.exports = equipmentSchema;