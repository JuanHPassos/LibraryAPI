import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => {
    // Header response and the content type
    res.writeHead(200, { "Content-Type": "text/plain" });
    // End of the response
    res.end("Curse of Node.js");
});

// Waiting event at PORT
server.listen(PORT, () => {
    console.log("server listening");
});

