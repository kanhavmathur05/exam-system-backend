const express = require("express");
const dotnev = require("dotenv").config();
const app = express()

const port = process.env.PORT || 5000;

app.get('/api/contact',(req,res)=>{
    res.status(200).json({message : "Get all contacts"})
})

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})