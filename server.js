const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
app.use(cors());
require('dotenv').config();
app.use(express.json());
const PORT = process.env.PORT;

app.get('/', 
 function (req, res) { 
  res.send('Hello Hero\'s') 
})
app.listen(PORT,()=>{
    console.log(`running on port ${PORT}`);
}) 