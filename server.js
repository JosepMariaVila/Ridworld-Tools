const http = require("http");
const fs = require("fs").promises;

const host = "localhost";
const port = 3000;

const requestListener = function (req, res) {
  if (req.url === "/") {
    fs.readFile(__dirname + "/index.html").then((contents) => {
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.end(contents);
    });
  } else if (req.url === "/burnNFT") {
    fs.readFile(__dirname + "/burnNFT.html").then((contents) => {
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.end(contents);
    });
  } else if (req.url === "/transferNFT") {
    fs.readFile(__dirname + "/transferNFT.html").then((contents) => {
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.end(contents);
    });
  } else if (req.url === "/acceptNFT") {
    fs.readFile(__dirname + "/acceptNFT.html").then((contents) => {
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.end(contents);
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 error! File not found.");
  }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
