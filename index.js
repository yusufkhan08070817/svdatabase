require("dotenv").config()
const express =require("express")
//const mongo=require("mongodb")
const app=express()
const os = require('os');
const route=require("./routes/routesData")
const connectDB=require("./connectmongo")
const start=require("./data")
 


const networkInterfaces = os.networkInterfaces();
const port = process.env.PORT || 8000
var ip;
app.use(express.json())
app.use("/sv",route)
// Find and print IPv4 addresses
for (const interfaceName in networkInterfaces) {
    const addresses = networkInterfaces[interfaceName];
    for (const address of addresses) {
      if (address.family === 'IPv4' && !address.internal) {
        console.log('IP Address:', address.address);
        ip=address.address;
      }
    }
  }
//start();
  connectDB(process.env.MONGODBURL)
app.listen(port,()=>{
    console.log(`connectd with ${ip}:${port}`);
})

