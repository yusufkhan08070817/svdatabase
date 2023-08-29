const model=require('../logininfoSyntex')
const upload=require("../data")
console.log("control");
  var mong= model.model({
        name:String,
        phone:Number,
        email:String,
        location:String,
        place:String,
        photo:String
        
        },"userinfo")
        
const Home=async(req,res)=>{
  

    const data=await mong.find({})
    res.status(200).json({data})
}
const userinfodata =async(req,res)=>{
    res.send("hello")
    console.log(req.body);
    await upload(req.body,"userinfodata");
}
const profiledata =async(req,res)=>{
    res.send("profile")
    console.log("progilr");
    console.log(req.body);
    await upload(req.body,"profiledata");
}


const getingoEn =async(req,res)=>{
   // res.send("profile")
    console.log("progilr");
    console.log(req.body);
   // await upload(req.body,"getingoEn");
  
    var name=req.body.name,email=req.body.email;
    console.log(name,email);
    try {
       
        const data=await mong1.find({ name: name, email: email })
        console.log(data);
        res.status(200).json({data}) 
    } catch (error) {
        console.log(error);
    }
}
const profiledataput=async(req,res)=>{
    console.log(req.body);

    try {
        const result = await mong.updateOne({ email: req.body.email }, { $set: req.body });
        console.log(result); // Handle the result here
      } catch (err) {
        console.error(err); // Handle any errors here
      }
      
    res.status(200).json(req.body)

}

module.exports={Home,userinfodata,profiledata,getingoEn,profiledataput}