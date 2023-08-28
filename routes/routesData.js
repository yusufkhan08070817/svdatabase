const express=require("express")
const {Home,userinfodata,profiledata,getingoEn}=require("../controler/controlerData")
const router=express.Router();
console.log("routes");
router.route("/").get(Home)
router.route("/userinfodata").post(userinfodata)
router.route("/profilrupdate").post(profiledata)
router.route("/getingoEn").post(getingoEn)
module.exports= router