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
});`          `
app.use('/search', function (req, res, next) {
    console.log("search");
    res.sendFile(__dirname + "/static/search.html");
});
app.use('/cart', function (req, res, next) {
    console.log("shopcart");
    res.sendFile(__dirname+"/static/shopcart.html");
});

app.use('/calls', function (req, res, next) {
    console.log("tamas");
    res.sendFile(__dirname+"/static/Calls.html");
});
app.use('/python-1', function (req, res, next) {
    console.log("tamas");
    res.sendFile(__dirname+"/static/python-starter.html");
});



app.post('/search_b', function (req, res, next) {
    console.log("search!!");
    res.send(req.body["search_i"]);
    res.sendFile(__dirname+"/static/search.html")
});


app.post('/login_b', function (req, res, next) {
     var result = true;
     var arr = fs.readFileSync('./login/u/all.txt').toString().split("\n");
     for(i in arr) {
         if(req.body["user"] == arr[i]){
             console.log('it has it noob');
         }
         else{
            //  console.log("the pass is : "+array[i]);
            //  console.log("the asli is : "+req.body["user"]);
            //  console.log(req.body["pass"] == array[i]);
             console.log("wowowowowow");
             result = false
         }
     }
     if(result == true){
         res.send("you succesfully logined")
     } 
   
    var array = fs.readFileSync('./login/u/pass.txt').toString().split("\n");
    for(i in array) {
        if(req.body["pass"] == array[i]){
            console.log('it has it noob');
        }
        else{
            // console.log("the pass is : "+array[i]);
            // console.log("the asli is : "+req.body["pass"]);
            // console.log(req.body["pass"] == array[i]);
            console.log("wowowowowow");
            result = false
        }
    }
    if(result == true){
        res.send("you succesfully logined")
    }
});
//__________________________________________________________
//__________________________________________________________
app.post('/signup_b', function (req, res, next) {
    res.send("It's changing . Don't signup now , please.");
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