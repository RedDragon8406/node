var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose=require('mongoose');
var https=require('https');
var fs=require('fs');
var app = express();
app.use(bodyParser());
/*
mongoose.connect('mangodb://localhost/scob_data');
var db=mongoose.connection;
db.on("error",function(err){
    if(err){
        console.log("something is wrong");
    }else{
        res.send("everything is fine");
    }
    
});
*/
app.use(express.static(__dirname+"/static"));
var usernames={name1:"123",name2:"12"};
var information={firstname:"0"};


app.use('/main', function(req,res,next) {
        console.log("main");
        res.sendFile(__dirname+"/static/main.html");
});
app.use('/login', function(req,res,next){
        console.log("login");
        res.sendFile(__dirname+"/static/login.html");
});
app.use('/signup',function(req,res,next){
        console.log("signup");
        res.sendFile(__dirname+"/static/signup.html");
});
app.use('/scob',function(req,res,next){
    console.log("scob");
    res.sendFile(__dirname+"/static/darbare scob.html");
});




app.post('/login_b',function(req,res,next){
    console.log(req.body);
    for(user in usernames){
        if(req.body["user"]==user){
            if(req.body["pass"]==usernames[user]){
                res.send("logined");
                return;
            }else{
                res.send("pass is wrong");
                return;
            }
        }
    }res.send("user is wrong");
});

app.post('/signup_b',function(req,res,next){
    for(user in usernames){
        if(req.body["username"]==user){
            res.send("this username is not available");
            return;
        }else{
            if(req.body.password==req.body.c_password){
            usernames[req.body.username]=req.body.password
            console.log(usernames);
            res.send("you signuppud successfull");
            return;
            }else{
                res.send("confirm pass is wrong");
            }
        }
    }
    res.sendFile(__dirname+"/static/login.html");
});


app.listen(8000);
console.log("connected!");