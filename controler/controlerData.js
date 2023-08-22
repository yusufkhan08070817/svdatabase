const model=require('../logininfoSyntex')
const upload=require("../data")

const Home=async(req,res)=>{
    const data=await model.find({})
    res.status(200).json({data})
}
const userinfodata =async(req,res)=>{
    res.send("hello")
    console.log(req.body);
    await upload(req.body);
}
module.exports={Home,userinfodata}