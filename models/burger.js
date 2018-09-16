var orm = require("../config/orm.js");

// code that to call the ORM functions using burger specific input for the ORM

// var burger = {
//     selectAll: function(cb) {
//         orm.selectAll("burgers", function(result) {
//             cb(result);
//         });
//     },
//     insertOne: function(column, value, cb) {
//         orm.insertOne("burgers", column, value, function(result) {
//             cb(result);
//         });
//     },
//     updateOne: function(column, condition, column, value, cb) {
//         orm.updateOne("burgers", column, condition, column, value, function(result) {
//             cb(result);
//         });
//     }
// };

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(col, val, cb) {
        orm.insertOne("burgers", col, val, function(res) {
            cb(res);
        });
    },
    updateOne: function(col, val, condition, cb) {
        cb(res);
    }
};

module.exports = burger;