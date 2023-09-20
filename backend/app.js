const express=require('express');
const app=express()

app.use(express.json());

app.get('/',(req,res)=>{
    console.log('hello world');
    res.end("hello world");
})

module.exports=app;