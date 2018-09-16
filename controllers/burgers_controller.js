var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data,
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    console.log("req.body: ", req.body);
    burger.insertOne("name", req.body.name, function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition: ", condition);

    burger.updateOne("eaten", "true", "id", req.params.id,
        function(result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            };
            res.status(200).end();
        }
    )
});

module.exports = router;