const axios = require('axios');
require('dotenv').config();
const ExerciseModel=require('../models/exercises.model')

const Cache = require('../helper/cache');

const cacheObj = new Cache();

const ExercisesController = (req, res) => {
    let equipmentId = req.query.equipmentId;
    if (!isNaN(equipmentId)) {
        if (cacheObj[equipmentId] && (Date.now() - cacheObj[equipmentId].timestamp < 86400000)) {
            console.log('From the cache Object');
            console.log('=====================');
            res.json(cacheObj[equipmentId].data);
        }
        else {
            axios.get(`https://wger.de/api/v2/exercise/?equipment=${equipmentId}&language=2`).then(response => {
                if (response.data.results.length !== 0) {
                    let modeledExerciseData = response.data.results.map(obj => {
                        return (new ExerciseModel(obj))
                    })
                    console.log('From the axios request');
                    console.log('=====================');
                    
                    cacheObj[equipmentId] = { data: modeledExerciseData };
                    cacheObj[equipmentId].timestamp = Date.now();
                    res.send(modeledExerciseData)
                }
                else {
                    res.send('there\'s no exercises for this equipment')
                }
            }).catch((error) => res.send(error.message))
        }
    }
    else {
        res.send('Please provid a valid equipment id between 0-10')
    }
}

module.exports = ExercisesController