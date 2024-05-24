const express = require('express')
const cors = require("cors")
const Payment = require('./Router/Payment')
const Forms = require('./Router/Detailform')
const Cource = require('./Router/Courcesdata')
const path = require('path')
require('dotenv').config()
require('./Mongoose/config')
const crypto = require('crypto')

const app = express();
app.use(express.static(path.join(__dirname,'./Public_html')))
app.use(cors())
app.use(express.json())
app.use("/api/payment",Payment)
app.use("/api/course",Cource)
app.use("/api/formsdetail",Forms)
app.get("/*",(req,res)=>{
    res.sendFile(path.join(__dirname,'./Public_html','index.html'))
})

app.listen(process.env.PORT,()=>{
    console.log(`Server Running on ${process.env.PORT}`)
})
