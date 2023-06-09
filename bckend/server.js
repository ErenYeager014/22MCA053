const express=require("express")
const app=express()
const dotenv=require("dotenv").config();
const Auth=require("./routers/Auth")
const trains=require("./routers/Trains");
app.use("/api/",[Auth,trains]) 
app.listen(process.env.PORT,()=>{
    
    console.log("server is running "+process.env.PORT)
})