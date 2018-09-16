var connection = require("../config/connection.js");

// var orm = {
//     selectAll: function(table, cb) {
//         var queryString = "select * from ??";
//         connection.query(queryString, table, function(err, result) {
//             if (err) throw err;
//             console.log(result);
//             cb(result);
//         });
//     },
//     insertOne: function(value, cb) {
//         var queryString = "insert into ?? values (?)";
//         connection.query(queryString, value, function(err, result) {
//             if (err) throw err;
//             console.log(result);
//             cb(results);
//         })
//     },
//     // update table set eaten = true where id = ?
//     updateOne: function(table, column, condition, column, value, cb) {
//         var queryString = "update ?? set ?? = ? where ?? = ?";
//         connection.query(queryString, [table, column, condition, column, value], function(err, result) {
//             if (err) throw err;
//             console.log(result);
//             cb(result);
//         });
//     }
// };

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
    updateOne: function(table, col, val, condition, cb) {
        var queryString = "update " + table + " set " + col + " = " + val + " where " + condition;
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;