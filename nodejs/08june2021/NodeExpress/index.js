const express=require('express')
const app=express()
app.get("/",(req,res)=>{
    res.write("<h1>hello from express.js</h1>")

}).listen(3000)
console.log("Express server running https://localhost/3000")
