const express=require('express');
const router=express.Router();
const passport=require('passport');
const userModel=require('../db');
const localStartegy=require('passport-local')

passport.use(new localStartegy(userModel.authenticate()));

router.get("/",(req,res)=>{
    res.send("Home");
})

const isLoggedIn=(req,res,next)=>{
    if(req.isAuthenticated()){
        return next()
    }
    else{
        res.send({failed:true})
    }
}

router.post("/create",async(req,res)=>{
        const data= new userModel({
        username:req.body.username,
        email:req.body.email
    })
    await userModel.register(data,req.body.password)
    .then(function(registereduser){
        passport.authenticate("local")(req,res,function(){
            res.send({success:true,loggedIn:"LoggedIn",name:data.username});
        })
    })
})
router.post("/login",passport.authenticate("local",{
}),function(req,res){
    const {username,password}=req.body;
    res.send({success:true,loggedIn:"LoggedIn"})
})


module.exports=router