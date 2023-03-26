const mongoose=require("mongoose")

const userschema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    place:String

})

const UserModel=mongoose.model("userdata",userschema)

module.exports=UserModel