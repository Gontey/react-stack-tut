require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");

//import routes
const authRoute = require("./routes/auth")

const app = express();


app.use(express.json());
app.use(express.urlencoded());

app.get("/api",(req, res)=>{
    res.send(`FS react course express server`);
}) ;

app.post('/name',(req,res)=>{
    if(!req.body.name){
       return res.status(400).json({error: "no name given"})
    }
    return res.json({name: req.body.name});
});

app.use("/api/auth", authRoute);

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=> {
        console.log('connected to db');

        app.listen(process.env.PORT, ()=>{
            console.log(`server running on port ${process.env.PORT}`);
        });
    })
    .catch((error)=>{
    console.log(error);
});

