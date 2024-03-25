const express=require('express');
const app=express()
const expressSession=require('express-session');
const passport = require('passport');
const userRouter=require('./Routes/user')
const productRouter=require('./Routes/products')
const {userModel}=require('./db')
var cors=require('cors');

app.use(expressSession({
    resave:false,
    saveUninitialized:false,
    secret:"Hello Haye Bye Bye"
}))
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(userModel.serializeUser())
passport.deserializeUser(userModel.deserializeUser())
app.use(cors())
app.use(express.json());
app.use('/',userRouter);
app.use('/',productRouter);
app.listen(5000);