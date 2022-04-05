let allCars = require('./carsDB').allCars;

// Keeps track of which ID will be used 
//  for the next car we add to our DB
var nextAvailableId = allCars.length + 1;

//--------------------------------------

// Update info of a car by its id
const updateCar = (theID, theCarInfoObj) => {
    const intCarId = parseInt(theID);
    let theObjToUpdate;
    allCars.forEach((current) => {
        if (current.id === intCarId) {
            theObjToUpdate = current;
            copyAllProperties(theCarInfoObj, theObjToUpdate);
            return (`Successfully updated car with ID=${theID}`)
        }
    });
    return null;
}
exports.updateCar = updateCar;
//--------------------------------------
// Get all cars
const getAllCarsFromDB = () => {
    return allCars;
};
exports.getAllCarsFromDB = getAllCarsFromDB;
//--------------------------------------
// Get info of a car by its id 
const findCarById = (carId) => {
    let found = `Couldn't find car with ID = ${carId}`;
    allCars.forEach((current) => {
        if (current.plate === carId) {
            found = current;
            return found;
        }
    })
    return found;
}
exports.findCarById = findCarById;

//----------------------------
const findCarByModel = (theModel) => {
    let filteredArr = allCars.filter((curr) => {
        return (curr.model === theModel);
    })
    return filteredArr;
}
exports.findCarByModel = findCarByModel;

//-----------------------------
const findCarByManufacturer = (theManufacturer) => {
    let filteredArr = allCars.filter((curr) => {
        return (curr.manufacturer === theManufacturer);
    })
    return filteredArr;
}
exports.findCarByManufacturer = findCarByManufacturer;
//-----------------------------




//--------------------------------------

const deleteCarById = (carId) => {
    for (let i = 0; i < allCars.length; i++) {
        if (allCars[i].plate === carId) {
            allCars.splice(i, 1);
            return true;
        }
    }
    return false;
}
exports.deleteCarById = deleteCarById;

//--------------------------------------


const addCar = (theObj) => {
    allCars.push(theObj);
    return true;
}
exports.addCar = addCar;

//--------------------------------------
