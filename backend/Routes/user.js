const express=require('express');
const router=express.Router();
const passport=require('passport');
const {userModel, productModel}=require('../db');
const localStartegy=require('passport-local')

passport.use(new localStartegy(userModel.authenticate()));

router.get("/",(req,res)=>{
    res.send("Home");
})

const isLoggedIn=(req,res,next)=>{
    if(req.isAuthenticated()){
        res.send(req.body.username)
        return next()
    }
    else{
        res.send({message:false})
    }
}

router.post("/create",async(req,res)=>{
        const data= new userModel({
        username:req.body.username,
        email:req.body.email
    })
    try {
        await userModel.register(data,req.body.password)
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
    router.post("/login",passport.authenticate("local",{
    }),async function(req,res){
        const {username,password}=req.body;
        const details=await userModel.findOne({username:username})
        res.send({success:true,id:details.id})
    })
}
catch (error){
    res.send("Envalid Credentials")
}
const userDetails={
    id:""
};
const fetchUser=(req,res,next)=>{
    const id=req.header('id');
    if(!id){
        res.send("something went wrong");
    }
    else{
        userDetails.id=id
        next()
    }
}
router.get("/addtocart",fetchUser,async(req,res)=>{
        nameofproduct=req.body.name
        const details=await productModel.findOne({name:nameofproduct});
        console.log(details);
        const adding=await userModel.findOneAndUpdate({username:req.body.username},{$push: { cart:details.id}})
        res.send("added");
})

router.get("/getUser",fetchUser,async(req,res)=>{
    const detials=await userModel.findById(userDetails.id);
    res.send(detials);
})

router.post("/buy",fetchUser,async(req,res)=>{

    const details=await productModel.findOneAndUpdate({name:req.body.name},{$push:{user:userDetails.id}})
    const purchased=await userModel.findOneAndUpdate({_id:userDetails.id},{$push: {purchase:req.body.id}})
    res.json("purchased")
})

module.exports=router