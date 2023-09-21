const express=require('express');
const hospitalRoute = require('./apis/getHospitalDetails');
const app=express()

app.use(express.json());

app.get('/',(req,res)=>{
    console.log('hello world');
    res.end("hello world");
})

app.use("/api/v1/details",hospitalRoute);


module.exports=app;