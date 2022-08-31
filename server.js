/// DEPENDENCIES //////
//////////////////////

const express = require("express");
const app = express();
const port = 3000;

/// DATABASE ///////
///////////////////

const bakedGoods = require("./models/bakedgoods.js");

//// LISTENER //////
///////////////////

app.listen(port, ()=>{
    console.log("Oven is on!")
})

//// ROUTES //////
//////////////////

// Index

app.get("/" , function (req, res){
    res.render("index.ejs")
})


// New

// Destroy

// Uupdate 

// Create

// Edit

// Show 

app.get("/:indexOfBakedGoods" , function (req, res){
    res.render("show.ejs" , {
        bakedGood: bakedGoods[req.params.indexOfBakedGoods]
    })
})