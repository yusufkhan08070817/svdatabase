require("dotenv").config()
const connectDB=require("./connectmongo")
const schy =require("./logininfoSyntex")
console.log("data");
const start=async (data,routes)=>{
try {
    await connectDB(process.env.MONGODBURL)
   
    switch(routes)
    {
        case  "userinfodata" :{ await schy.senddata({name:String,phone:Number,email:String,location:String,place:String, photo:String},"Userinfo",data); break }
case "profiledata" :{ console.log(routes);
     await schy.senddata({Name:String,Phone:Number,Email:String,Location:String,Place_of_use:String},"presnolinfo",data);break}
    }
   
    
} catch (error) {
    console.log(error);
}
}

module.exports=start