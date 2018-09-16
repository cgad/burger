var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, cb) {
        var queryString = "select * from ??";
        connection.query(queryString, table, function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    insertOne: function(value, cb) {
        var queryString = "insert into ?? values (?)";
        connection.query(queryString, value, function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(results);
        })
    },
    // update table set eaten = true where id = ?
    updateOne: function(table, column, condition, column, value, cb) {
        var queryString = "update ?? set ?? = ? where ?? = ?";
        connection.query(queryString, [table, column, condition, column, value], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    }
};

module.exports = orm;