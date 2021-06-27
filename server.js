const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
app.use(cors());
require("dotenv").config();
app.use(express.json());
const PORT = process.env.PORT;

const mongoose = require("mongoose");

const getEquipment = require("./controller/equipment.controller");
const { seedUserData } = require("./models/user.model");
mongoose.connect("mongodb://localhost:27017/homegym", { useNewUrlParser: true, useUnifiedTopology: true });

////// end Server

// seedUserData()

app.get("/", function(req, res) {
    res.send("Hello Hero's");
});

app.get("/profile", getEquipment);
app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});