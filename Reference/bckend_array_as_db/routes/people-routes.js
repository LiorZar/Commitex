const express = require('express');
const router = express.Router();


//--------------------------------------
// Get all people
router.get("/", (req, res) => {

    //... 

});

//--------------------------------------
// Get a person by id
router.get("/:id", (req, res) => {

    //... 

});

//--------------------------------------
// Add new person
router.post("/", (req, res) => {

    //... 

});
//--------------------------------------
// update person
router.put("/:id", (req, res) => {

    //... 

});
//--------------------------------------
// delete person by id
router.delete("/:id", (req, res) => {

    //... 

});


module.exports = router;