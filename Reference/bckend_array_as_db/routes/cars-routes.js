const myRepository = require('../DB/myRepository')
const express = require('express');
const router = express.Router();



//--------------------------------------
// Get all cars
// http://localhost:2189/cars?manufacturer=renault
// http://localhost:2189/cars?model=cleo
router.get("/", (req, res) => {
    // check if we have query params
    let results = [];
    let manufacturer = req.query.manufacturer;
    let model = req.query.model;
    if (model !== undefined) {
        results = myRepository.findCarByModel(model)
    }
    else if (manufacturer !== undefined) {
        results = myRepository.findCarByManufacturer(manufacturer)
    }
    res.send({ cars: results });
});

//--------------------------------------
// Get a car by id
router.get("/:someword", (req, res) => {
    res.send(myRepository.findCarById(req.params.someword));
});

//--------------------------------------
// Add new car
router.post("/", (req, res) => {
    console.log(require('../DB/carsDB').allCars);
    let isAllOK = myRepository.addCar(req.body);
    console.log('-----------------------');
    console.log(require('../DB/carsDB').allCars);
    if (isAllOK === true) {
        res.send("added new car");
    }
    else {
        res.send("unsuccessful adding new car");
    }
});
//--------------------------------------
// update car
router.put("/:id", (req, res) => {

});
//--------------------------------------
// delete car by id
router.delete("/:id", (req, res) => {
    console.log(require('../DB/carsDB').allCars);
    let result = myRepository.deleteCarById(req.params.id)
    console.log(require('../DB/carsDB').allCars);
    if (result === true) {
        res.send("deleted the car")
    }
    else {
        res.send("car with the provided id does not exist")
    }
});



module.exports = router;
