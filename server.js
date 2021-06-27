const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
app.use(cors());
require('dotenv').config();
app.use(express.json());
const PORT = process.env.PORT;
const EquipmentsController=require('./controller/equipments.controller')
const ExercisesController=require('./controller/exercises.controller')

app.get('/',(req, res)=> {res.send('Hello Hero\'s')})
app.get('/exercises', ExercisesController)
app.get('/equipments', EquipmentsController)

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
})