const mongoose=require("mongoose")
//uri="mongodb+srv://yusuf:8xyBVjGwBYsTU2y9@svserver.exckp4u.mongodb.net/SvServer?retryWrites=true&w=majority"

const connectDB=(uri)=>{
    console.log("connect db",uri);
    return mongoose.connect(uri,{ useNewUrlParser: true,

        useUnifiedTopology: true,})
}
module.exports=connectDB