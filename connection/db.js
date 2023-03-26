const mongoose=require('mongoose')

const connection=mongoose.connect("mongodb+srv://mayank:kirankhobragade@cluster0.p76gqkx.mongodb.net/tododatabase?retryWrites=true&w=majority")

module.exports=connection