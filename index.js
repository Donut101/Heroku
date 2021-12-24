const express = require("express")
const { process } = require("ipaddr.js")
const app = express()

app.get("/",function(req,res){
    res.send("WORKIng!!!")
})

app.listen(process.env.PORT || 5000);
