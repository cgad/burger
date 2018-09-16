var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne("name", req.body.name, function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("api/burgers/:id", function(req, res) {
    burger.updateOne("eaten", "true", "id", req.params.id,
        function(result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            };
            res.status(200).end();
        }
    )
});