require("dotenv").config()
const connectDB=require("./connectmongo")
const schy =require("./logininfoSyntex")

const start=async (data)=>{
try {
    await connectDB(process.env.MONGODBURL)
    await schy.create(data)
    
} catch (error) {
    console.log(error);
}
}

module.exports=start