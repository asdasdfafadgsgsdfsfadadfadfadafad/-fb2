const express = require("express");
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())

app.get("/",(req,resp)=>{
    resp.json("heroku works finally")
})
app.listen(process.env.port || 3000)























