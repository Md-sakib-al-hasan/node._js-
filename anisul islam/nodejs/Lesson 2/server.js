const http = require('http');
// http.createServer((req, res) => {
// res.end("hell i am you first server");
// }).listen(3) ;
const port= 3000;
const hostname= '127.0.0.1'
const myserver = http.createServer((req,res) => {
    res.writeHead(202, {'content-Type': 'text/html'});
    res.write("<h1>hello</h1>");
    res.end();
})
myserver.listen(port,hostname, () => {
    console.log(`http://${hostname}:${port}`);
}) 