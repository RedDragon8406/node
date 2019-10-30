var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static(__dirname+"/static"));
//_________________________________________________
app.get('/', function(req,res,next) {
    console.log("page main connected!");
    res.sendFile(__dirname+"/static/html/page main.html");
});
//__________________________________________________
app.use('/page2', function(req,res,next){
    console.log("page 2 connected!");
    res.sendFile(__dirname+"/static/html/page2.html");
});
//__________________________________________________
app.use('/page1', function(req,res,next){
    console.log("page 1 connected!");
    res.sendFile(__dirname+"/static/html/page1.html");
});

app.listen(8000);
console.log("server is on!");