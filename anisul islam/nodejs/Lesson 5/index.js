const http = require("http");
const fs = require("fs");
const { hostname } = require("os");
const PORT = process.env.PORT;
const hostName ='127.0.0.1';


const sever= http.createServer((req,res) => {
    const handerler = (stateCode,fileloaction) => {
        fs.readFile(fileloaction, 'utf-8', (err,data) => {
           if(err){
            console.log(err);
           }else
           {
            res.writeHead(stateCode,{'contant-Type':"text/html"});
            res.write(data);
            res.end();
           }
        })
       
    }
    if(req.url === '/'){
        handerler(200,"./views/about.html");
    }else if (req.url === '/about'){
        handerler(200,"./views/about.html");
    }else if (req.url === '/contact'){
        handerler(200,"./views/index.html");
    }else{
        handerler(400,"./views/error.html");
    }
});
sever.listen(PORT,hostName, ()  =>{
    console.log(`The server was run http://${hostName}:${PORT}`);
});
