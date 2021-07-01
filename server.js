const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
app.use(cors());
require("dotenv").config();
app.use(express.json());
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const EquipmentsController = require("./controller/equipments.controller");
const ExercisesController = require("./controller/exercises.controller");
const { getEquipment
     , creatEquipment
      ,deleteEquipment,
      updateEquipment
    } = require("./controller/equipment.controller");
const { seedUserData} = require("./models/user.model");
//"mongodb://localhost:27017/homegym"
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
////// end Server
//  seedUserData()

app.get("/", (req, res) => {
    res.send("Hello Hero's");
});
app.get("/exercises", ExercisesController);
app.get("/equipments", EquipmentsController);
app.get("/profile", getEquipment);
app.post("/product", creatEquipment);
app.delete("/product/:product_idx", deleteEquipment);
app.put("/product/:product_idx", updateEquipment);

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});