const http = require("http");
const fs = require('fs');
const { escape } = require("querystring");
const POT = 3000;
const hostName = '127.0.0.1';
const serever = http.createServer((req,res) => {
    // res.end("welocme to the server wellocm");
   const hander= ( statusCode,fileLoaction) => {
    fs.readFile(fileLoaction ,'utf-8' , (err,data) => {
        res.writeHead(statusCode,{'Content-Type' : 'text/html'});
        res.write(data);
        res.end();
      });
   }
    if(req.url === '/'){
       hander(200,'index.html');
    }
    else if (req.url === '/about'){
        hander(200,'about.html');
    }else if(req.url === '/contact'){
        hander(200,'contact.html');
    }else{
        hander(200,'error.html');
    }

});
serever.listen(POT,hostName, () => {
    console.log(`server is running at http://${hostName}:${POT}`);
})