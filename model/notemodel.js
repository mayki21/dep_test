const mongoose=require("mongoose")

const noteschema=mongoose.Schema({
    title:String,
    sub:String,
    body:String,
    userID:String


})


const NoteModel=mongoose.model("note",noteschema)

module.exports=NoteModel;