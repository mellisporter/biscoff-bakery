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

app.use(express.urlencoded({ extended: false }))


//// ROUTES //////
//////////////////

// Index

app.get("/bakedgoods" , function (req, res){
    res.render("index.ejs" , {
        allBakedGoods: bakedGoods
    })
})


// New
app.get("/bakedgoods/new", function (req, res){
    res.render("new.ejs")
})
// Destroy

// Update 

// Create
app.post("/bakedgoods", function (req, res){
    bakedGoods.push(req.body)
    // res.send("data received")
    res.redirect("/bakedgoods")
})

// Edit

// Show 

app.get("/bakedgoods/:indexOfBakedGoods" , function (req, res){
    res.render("show.ejs" , {
        bakedGood: bakedGoods[req.params.indexOfBakedGoods]
    })
})