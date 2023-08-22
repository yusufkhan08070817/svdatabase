const mongoose=require("mongoose")
//console.log("mongo");
const logininfoschema= new mongoose.Schema({
name:String,
phone:Number,
email:String,
location:String,
place:String,
photo:String

})


module.exports =mongoose.model("Userinfo",logininfoschema);