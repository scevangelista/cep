'user strict';
var dbConn = require('./../../config/db.config');

var City = function(city){
    this.code = city.code;
    this.state_code = city.state_code;
    this.name = city.name;
};

City.findByCode = function (code, result) {
    dbConn.query("SELECT * FROM cities WHERE code = ? ", code, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};


City.findByStateCode = function (code, result) {
    dbConn.query("SELECT * FROM cities WHERE state_code = ? ", code, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

City.findAll = function (result) {
    dbConn.query("SELECT * FROM cities", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });   
};

module.exports = City;