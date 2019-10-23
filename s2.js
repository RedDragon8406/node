var http=require("http");
var fs=require("fs");

http.createServer( function(req,res){
    if(req.method == "GET"){
        if(req.url == "/"){


            console.log("connect to the server")
            fs.readFile("./page1.html", function(err,data){
                if(err){
                    console.log(err)
                }else{
                    res.writeHead(200,{"Content-Type":"text/html"})
                    res.write(data)
                    res.end
                }
            });

        }
    }else if(req.url == "/page2"){
            console.log("connect to the server")
            fs.readFile("./page2.html", function(err,data){
                if(err){
                    console.log(err)
                }else{
                    res.writeHead(200,{"Content-Type":"text/html"})
                    res.write(data)
                    res.end 
                }
            });

        }
}).listen(8000);