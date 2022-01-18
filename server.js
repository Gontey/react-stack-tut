require('dotenv').config();
const e = require('express');
const express = require("express");

const app = express();


app.use(express.json());
app.use(express.urlencoded());

app.get("/",(req, res)=>{
    res.send(`FS react course express server`);
}) ;

app.post('/name',(req,res)=>{
    if(!req.body.name){
       return res.status(400).json({error: "no name given"})
    }
    return res.json({name: req.body.name});
});

app.listen(process.env.PORT, ()=>{
    console.log(`server running on port ${process.env.PORT}`);
});