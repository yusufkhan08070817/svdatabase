const express=require("express")
const {Home,userinfodata,profiledata,getingoEn,profiledataput,abbc}=require("../controler/controlerData")
const router=express.Router();
console.log("routes");
router.route("/").get(Home)
router.route("/userinfodata").post(userinfodata)
router.route("/profilrupdate").post(profiledata)
router.route("/profilrupdate").put(profiledataput)
router.route("/getingoEn").post(getingoEn)
router.route("/try:name").get(abbc)
module.exports= router