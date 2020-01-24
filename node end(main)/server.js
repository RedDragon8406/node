var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var https = require('https');
var app = express();
app.use(bodyParser());

var fs = require('fs');
var path = './login/user'


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
app.use(express.static(__dirname + "/static"));
var usernames = { name1: "123", name2: "12" };
var information = { firstname: "0" };


app.use('/main', function (req, res, next) {
    console.log("main");
    res.sendFile(__dirname + "/static/main.html");
});
app.use('/login', function (req, res, next) {
    console.log("login");
    res.sendFile(__dirname + "/static/login.html");
});
app.use('/signup', function (req, res, next) {
    console.log("signup");
    res.sendFile(__dirname + "/static/signup.html");
});
app.use('/scob', function (req, res, next) {
    console.log("scob");
    res.sendFile(__dirname + "/static/darbare scob.html");
});
app.use('/search', function (req, res, next) {
    console.log("search");
    res.sendFile(__dirname + "/static/search.html");
});
app.use('/cart', function (req, res, next) {
    console.log("shopcart");
    res.sendFile(__dirname+"/static/shopcart.html");
});

app.post('/search_b', function (req, res, next) {
    console.log("search!!");
    res.send(req.body["search_i"]);
});


app.post('/login_b', function (req, res, next) {
    /*console.log(req.body);
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
    */
    /*
     u='./login/user/'+req.body["user"]+".txt"
     p='./login/pass/'+req.body["pass"]+'.txt'
     try{
         if(fs.existsSync(u)){
             if(fs.existsSync(p)){
                 res.send("logined");
                 return;
             }else{
                 res.send("user or pass is wrong!");
                 return;
             }
         }else{
             res.send("user or pass is wrong!");
             return;
         }
 
     }catch(err) {
         console.error(err);
       }
       */
});
//__________________________________________________________
//__________________________________________________________
app.post('/signup_b', function (req, res, next) {
    
});


app.listen(8000);
console.log("connected!");















    /*for(user in usernames){
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
    }*/
    /*
    res.sendFile(__dirname+"/static/login.html");
   try {
       var s=0;
    path="./login/user/"+req.body["username"]+".txt"
    console.log(path);
    if (fs.existsSync(path)) {
      res.send("username is not available");
    }else{ 
        var s=1;
    }
    s=0
      path_p="./login/pass/"+req.body.password+".txt"
      console.log(path_p);
      if (fs.existsSync(path_p)){
        if(req.body.password==req.body.c_password){
                
            var s=1;
        }else{
            res.send("cpass is wrong");
        }
      }else{
        if(req.body.password==req.body.c_password){
                
            var s=1;
        }else{
            res.send("cpass is wrong");
        }
      }


      if(s==1){
        fs.writeFile("./login/user/"+req.body["username"]+".txt","hi",function(){})
        fs.writeFile("./login/pass/"+req.body.password+".txt","hi",function(){})
          res.send("you signupped succesfully!");
      }
    path_p=""
    path=""
    } catch(err) {
        console.error(err);
      }
    /*
    fs.open('./login/u/all.txt',function(){
        fs.appendFile('')
    })
    */