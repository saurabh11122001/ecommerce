const mongoose=require('mongoose');
const plm=require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/users");

const schema=mongoose.Schema({
    username:String,
    email:String,
    password:String
})
schema.plugin(plm);

module.exports=mongoose.model("userinfo",schema);