const express=require("express")
const mongoose=require("mongoose")
const connection=require("./connection/db")
const noteroute=require("./route/noteroute")
const userroute=require("./route/userroute")
const authr=require("./middleware/auth")
const cors=require("cors")

const app=express()
app.use(express.json())
app.use(cors())
app.use("/user",userroute)

app.use(authr)

app.use("/note",noteroute)



app.listen(9090,async()=>{
    await connection
    console.log("connected to DB")
})

