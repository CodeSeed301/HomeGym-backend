`use strict`;

const mongoose = require("mongoose");

const equipmentSchema = new mongoose.Schema({
  title: { type: String },
  discription: { type: String },
  id: { type: Number },
  quantity: {type: Number},
});

module.exports = equipmentSchema;