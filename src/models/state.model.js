'user strict';
var databaseConnection = require('./../../config/db.config');

var State = function(state){
    this.code = state.code;
    this.country_code = state.country_code;
    this.name = state.name;
    this.initials = state.initials;
};

State.findByCode = function (code, result) {
    databaseConnection.query("SELECT * FROM states WHERE code = ? ", code, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

State.findByCountryCode = function (code, result) {
    databaseConnection.query("SELECT * FROM states WHERE country_code = ? ", code, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

State.findAll = function (result) {
    databaseConnection.query("SELECT * FROM states", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });   
};

module.exports = State;