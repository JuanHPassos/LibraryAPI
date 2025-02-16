import http from "http";

const PORT = 3000;

const routes = {
    // Basic route
    "/": "Curse of Node.js",
    "/books": "Entered the books route",
    "/authors": "Entered the authors route"
}; 

const server = http.createServer((req, res) => {
    // Header response and the content type
    res.writeHead(200, { "Content-Type": "text/plain" });
    // End of the response
    res.end(routes[req.url]);
});

// Waiting event at PORT
server.listen(PORT, () => {
    console.log("server listening");
});

