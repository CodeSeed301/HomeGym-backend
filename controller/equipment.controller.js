`use strict`;

const { userModel } = require("../models/user.model");

const getEquipment = (req, res) => {
    const { email } = req.query;

    userModel.findOne({ email: email }, (error, user) => {
        if (error) {
            res.send(error);
        } else {
            res.json(user);
        }
    });
};

module.exports = getEquipment;