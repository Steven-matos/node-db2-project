const express = require("express");

const Car = require("../data/dbConfig.js");

const router = express.Router();

router.get("/", (req, res) => {
  Car.select("*")
    .from("cars")
    .then(car => {
      res.status(200).json(car);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Failed to get vehicles",
        error: error
      });
    });
});

router.post("/", (req, res) => {
  if (!req.body.vin || !req.body.make || !req.body.model || !req.body.mileage) {
    res.status(400).json({
      message: "Missing required information check docs"
    });
  } else {
    Car("cars")
      .insert(req.body, "id")
      .then(ids => {
        res.status(201).json(ids);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
          message: "Failed to save vehicle!",
          error: error
        });
      });
  }
});



module.exports = router;
