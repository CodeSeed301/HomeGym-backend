`use strict`;

const mongoose = require("mongoose");

const equipmentSchema = new mongoose.Schema({
    title: { type: String },
    id: { type: String },
    quantity: { type: String },
});

module.exports = equipmentSchema;