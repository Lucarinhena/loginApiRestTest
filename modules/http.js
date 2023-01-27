const { doesNotMatch } = require("assert");
const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Home Page</h1>");
  }
  if (req.url === "/users") {
    const users = [
      {
        name: "John Doe",
        email: "john@doe.com",
      },
      {
        name: "Luca Carinhena",
        email: "luca@.com",
      },
    ];
    res.writeHead (200, {'Content-type': 'application/json'})
    res.end (JSON.stringify(users));
  }
});

server.listen(port, () => console.log(`Rodando na porta: ${port}`));
