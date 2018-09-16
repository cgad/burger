var orm = require("../config/orm.js");

// code that to call the ORM functions using burger specific input for the ORM

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(result) {
            cb(result);
        });
    },
    insertOne: function(column, value, cb) {
        orm.insertOne("burgers", column, value, function(result) {
            cb(result);
        });
    },
    updateOne: function(column, condition, column, value, cb) {
        orm.updateOne("burgers", column, condition, column, value, function(result) {
            cb(result);
        });
    }
};

module.exports = burger;