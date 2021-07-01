const axios = require('axios');
require('dotenv').config();
let ourDataJson = require('../assets/ourData.json');
const Cache = require('../helper/cache');

const cacheObj = new Cache();
class EquimentsModeling {
  constructor(obj) {
    this.name = obj.name;
    this.id = obj.id;
    this.image_url = obj.image_url;
    this.description = obj.description;
    this.price = obj.price;
  }
}

const EquipmentsController = (req, res) => {
  let products = 0;
  if (cacheObj[products] && (Date.now() - cacheObj[products].timestamp < 86400000)) {
    res.json(cacheObj[products].data);
  }
  else{

    axios.get(`${process.env.API_URL}/equipment/`).then(response => {
      let filterdExcludeFifthIdx = (response.data.results.filter(value => {
        return (
          value.id !== 5
        )
      }))
      let modeledEquipmentsData = filterdExcludeFifthIdx.map((obj, idx) => {
        // if(idx===ourDataJson.indexOf(ourDataJson[idx])){
        obj.image_url = ourDataJson[idx].image_url
        obj.description = ourDataJson[idx].description
        obj.price = ourDataJson[idx].price
        // }
        return new EquimentsModeling(obj)
      })
      cacheObj[products] = { data: modeledEquipmentsData };
      cacheObj[products].timestamp = Date.now();
      // console.log(cacheObj[products].data.length) 
      res.send(modeledEquipmentsData)
    }).catch((error) => res.send(error.message))
  }
}

module.exports = EquipmentsController;