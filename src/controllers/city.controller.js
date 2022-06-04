'use strict';

const City = require('../models/city.model');

exports.findAll = function (req, res) {
    City.findAll(function (err, city) {
        if (err)
            res.send(err);
        res.json(city);
    });
};

exports.findByCode = function (req, res) {
    const code = parseInt(req.params.code);
    City.findByCode(code, function (err, city) {
        if (err)
            res.send(err);
        res.json(city);
    });
};

exports.findByStateCode = function (req, res) {
    const code = parseInt(req.params.code);
    City.findByStateCode(code, function (err, city) {
        if (err)
            res.send(err);
        res.json(city);
    });
};