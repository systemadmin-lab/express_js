const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

//database connection
mongoose.connect("mongodb://localhost/todos")

.then(()=>{
    
    console.log("connected to database");
}).catch((err)=>{
    console.log(err);
})



function errorHandler(err, req, res, next) {
    console.log(err);
    res.status(500).json({
        message: "Something went wrong",
        error: err.message
    })
}


app.listen(3000,()=>{
    console.log("running and burning");
})