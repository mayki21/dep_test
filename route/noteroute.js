const express=require("express")
const noterout=express.Router()
const jwt=require("jsonwebtoken")
const noteModel=require("../model/notemodel")
// const UserModel = require("../model/usermodel")



noterout.get("/",async(req,res)=>{
    // res.send("welcome")
    const token=req.headers.authorization.split(" ")[1]
    const decoded=jwt.verify(token,"mayank")
    try {
        if(decoded)
        {
            const data=await noteModel.find({"userID":decoded.userID})
            res.status(200).send(data)
        }
    } catch (error) {
        res.status(404).send(error)
    }

})


noterout.post("/post",async(req,res)=>{
    try {
        const token=req.headers.authorization.split(" ")[1]
        const data=await noteModel(req.body)
        await data.save()
        res.status(200).send({"msg":"note created"})
    } catch (error) {
        res.status(400).send({"msg":"error"})
    }
})


noterout.delete("/delete/:id",async (req,res)=>{
    let {id}=req.params
    const data=await noteModel.findByIdAndDelete({_id:id})
    res.status(200).send(data) 
})


noterout.put("/put/:id",async (req,res)=>{
    let {id}=req.params
    let payload=req.body
    const data=await noteModel.findByIdAndUpdate({userID:id},payload)
    res.status(200).send(data) 
})


module.exports=noterout