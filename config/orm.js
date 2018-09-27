var connection = require("../config/connection.js");

var orm = {
    // select * from burgers;
    selectAll: function(table, cb) {
        var queryString = "select * from " + table + ";";
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    // insert into burgers (name) values (...);
    insertOne: function(table, col, val, cb) {
        var queryString = 'insert into ' + table + ' (' + col + ') ' + 'values ("' + val + '")';
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    // condition = "id = ...";
    // update burgers set eaten = true where id = ...;
    updateOne: function(table, col, val, id, cb) {
        var queryString = "update " + table + " set " + col + " = " + val + " where id = " + id;
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;