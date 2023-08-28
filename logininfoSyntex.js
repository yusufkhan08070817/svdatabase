const mongoose=require("mongoose")
console.log("mongostyle");


function tackstructure(a,b,c)
{

    const schima= new mongoose.Schema(a)
    mongoose.model(b,schima).create(c)
}
function getsome(a,b){
    const schima= new mongoose.Schema(a)
   return mongoose.model(b,schima)
}

module.exports.senddata=tackstructure
module.exports.model=getsome
