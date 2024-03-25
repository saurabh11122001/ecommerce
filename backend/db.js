const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/users");

// Define User Schema
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    cart:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'productInfo'
    }],
    purchase:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'productInfo'
    }]
});
userSchema.plugin(plm);

// Define Product Schema
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    user:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'userinfo'
    }]
});
const adminSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});
adminSchema.plugin(plm);
// Export both schemas
module.exports = {
    userModel: mongoose.model("userinfo", userSchema),
    productModel: mongoose.model("productinfo", productSchema),
    adminModel: mongoose.model("admininfo", adminSchema)
};
