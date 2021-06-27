`use strict`;

const mongoose = require("mongoose");

const equipmentSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    id: { type: Number },
    quantity: { type: Number },
});

module.exports = equipmentSchema;