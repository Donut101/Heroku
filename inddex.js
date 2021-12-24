const express = require("express")
const { process } = require("ipaddr.js")
const app = express()

app.get("/",function(res,req){
    res.send("WORKIng!!!")
})

app.listen(process.env.PORT || 5000);
