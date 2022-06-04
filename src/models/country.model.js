'user strict';
var dbConn = require('./../../config/db.config');

var Country = function(country){
    this.code = country.code;
    this.name = country.name;
    this.initials = country.initials;
};

Country.findByCode = function (code, result) {
    dbConn.query("SELECT * FROM countries WHERE code = ? ", code, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

Country.findAll = function (result) {
    dbConn.query("SELECT * FROM countries", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });   
};

module.exports = Country;