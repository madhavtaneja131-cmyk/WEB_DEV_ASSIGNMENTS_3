const http = require("http");

const server = http.createServer((req, res) => {

    if(req.url === "/"){
        res.write("Welcome to my server");
        res.end();
    }
    else if(req.url === "/about"){
        res.write("About page");
        res.end();
    }
    else if(req.url === "/contact"){
        res.write("Contact page");
        res.end();
    }
    else{
        res.writeHead(404);
        res.write("Page not found");
        res.end();
    }

});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});