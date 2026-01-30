const http = require('http');


const server = http.createServer((req,res) => {

switch (req.url) {
    case "/" :
        res.writeHead(200, {"Content-Type" : "text/html"});
        console.log("requested ",req.url);
        res.end("<H1>Home Page</H1>");
        break;
    case "/about" :
        res.writeHead(200,{"Content-Type" : "text/html"});
        console.log("requested ", req.url);
        res.end("<h1>About Node.js</h1>");
        break;
    case "/help" :
        res.writeHead(200,{"Content-Type" : "text/html"});
        console.log("requested",req.url);
        res.end("<h1>Help Page</h1>");
        break;
    default :
        res.writeHead(400, {"Content-Type" : "text/plain"});
        console.log("404",req.url);
        res.end(`${req.url} - 404 Page Not Found`);
        break;
        
}


});

server.listen(3000, ()=>{
    console.log("Server running on http://localhost:3000 !!")
})