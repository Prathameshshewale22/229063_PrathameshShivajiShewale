const express=require("express");
var app=express();


app.get("/",(req,res)=>{
    res.sendFile("./public/index.html",{root:__dirname})
});

app.get("/schedule",(req,res)=>{
    res.sendFile("./public/schedule.html",{root:__dirname})
});

app.listen(8000);
console.log("server running at port 8000");