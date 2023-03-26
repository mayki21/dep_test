const express=require("express")
const userroute=express.Router()
const userModel=require("../model/usermodel")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
// const { token } = require("morgan")
const app=express()


userroute.post("/register",async(req,res)=>{
    try {
      const {name,email,password,place}=req.body
      bcrypt.hash(password,4, async(err, hash)=> {
        const user=new userModel({name,email,password:hash,place})
        await user.save()
        res.status(200).send({"msg":"user registered successfully"})
    })
        
    }
     catch (error) {
        res.status(400).send({"msg":"error bro"})
    }

})




userroute.post("/login",async(req,res)=>{
    try {
        const {email,password}=req.body
        const getdata=await userModel.findOne({email})
        if(getdata)
        {
            bcrypt.compare(password, getdata.password, async(err, result)=> {
                if(result)
                {
                   res.status(200).send({"msg":"successful login","token":jwt.sign({"userID":getdata._id},"mayank",{expiresIn:"12h"})})
                }
                else
                {
                    res.status(404).send({"msg":"wrong credential"})
                }
               
            });
        }
    } 
    catch (error) {
        res.status(404).send({"msg":"not valid user"})
    }
})


module.exports=userroute