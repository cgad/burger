var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table) {
        var queryString = "select * from ??";
        connection.query(queryString, table, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(value) {
        var queryString = "insert into ?? values (?)";
        connection.query(queryString, value, function(err, result) {
            if (err) throw err;
            console.log(result);
        })
    },
    updateOne: function(table, column, newValue, column, oldValue) {
        var queryString = "update ?? set ?? = ? where ?? = ?";
        connection.query(queryString, [table, column, newValue, column, oldValue], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;