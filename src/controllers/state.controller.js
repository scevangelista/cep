'use strict';

const State = require('../models/state.model');

exports.findAll = function (req, res) {
    State.findAll(function (err, state) {
        if (err)
            res.send(err);
        res.json(state);
    });
};

exports.findByCode = function (req, res) {
    const code = parseInt(req.params.code);
    State.findByCode(code, function (err, state) {
        if (err)
            res.send(err);
        res.json(state);
    });
};

exports.findByCountryCode = function (req, res) {
    const code = parseInt(req.params.code);
    State.findByCountryCode(code, function (err, state) {
        if (err)
            res.send(err);
        res.json(state);
    });
};