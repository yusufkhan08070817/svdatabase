const express=require("express")
const {Home,userinfodata}=require("../controler/controlerData")
const router=express.Router();
router.route("/").get(Home)
router.route("/userinfodata").post(userinfodata)

module.exports= router