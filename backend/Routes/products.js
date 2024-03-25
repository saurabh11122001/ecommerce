const express=require('express');
const router=express.Router();
const passport=require('passport');
const { productModel,adminModel}=require('../db');
const localStartegy=require('passport-local')

passport.use(new localStartegy(adminModel.authenticate()));

router.post("/createadmin",async(req,res)=>{
    const data= new adminModel({
    username:req.body.username,
    email:req.body.email
})
try {
    await adminModel.register(data,req.body.password)
    .then(function(registereduser){
        passport.authenticate("local")(req,res,function(){
            res.send({success:true,loggedIn:"LoggedIn",name:req.body.username});
        })
    })
    
} catch (error) {
    res.send(error);
}
})
try{
    router.post("/adminlogin",passport.authenticate("local",{
    }),async function(req,res){
        const {username,password}=req.body;
        const details=await adminModel.findOne({username:username})
        res.send({success:true,id:details.id})
    })
}
catch (error){
    res.send("Envalid Credentials")
}
const productDetails={
    id:""
};
const fetchAdmin=(req,res,next)=>{
    const id=req.header('id');
    if(!id){
        res.send("You are not admin");
    }
    else{
        productDetails.id=id
        next()
    }
}
router.get("/product",fetchAdmin,async(req,res)=>{
    try{
        const user=await adminModel.findById(productDetails.id);
    }
    catch (error){
        res.send("not a valid admin");
        return
    }
    const products=await productModel.create({
        name:req.body.name,
        price:req.body.price
    })
    res.send("added")
})


module.exports=router