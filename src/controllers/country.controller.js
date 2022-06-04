'use strict';

const Country = require('../models/country.model');

exports.findAll = function (req, res) {
    Country.findAll(function (err, country) {
        if (err)
            res.send(err);
        res.json(country);
    });
};

exports.findByCode = function (req, res) {
    const code = parseInt(req.params.code);
    Country.findByCode(code, function (err, country) {
        if (err)
            res.send(err);
        res.json(country);
    });
};