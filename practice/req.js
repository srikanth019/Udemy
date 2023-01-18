//Sending responses
/*const http = require("http");
const server = http.createServer((request,response) => {
  response.setHeader("Conteny-Type","text/html");
  response.write('<html>')
  response.write('<head><title>My First Page</title></head>');
  response.write('<body><h1>Hello from Node.js Server</h1></body>')
  response.write('</html>')
  response.end();
});
server.listen(3000);*/


//Routing requests
const http = require("http");
const fs = require('fs');

const server = http.createServer((request,response) => {
    const url = request.url;
    const method = request.method;
    if (url === "/") {
        response.write('<html>')
        response.write('<head><title>Enter Message</title></head>');
        response.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">send<button/></form></body>')
        response.write('</html>')
        return response.end();
    }
    if (url === "/message" && method === "POST") {
        fs.writeFileSync("message.txt", "dummy");
        response.statusCode = 302;
        response.setHeader("Location","/");
        return response.end();
    }
  response.setHeader("Conteny-Type","text/html");
  response.write('<html>')
  response.write('<head><title>My First Page</title></head>');
  response.write('<body><h1>Hello from Node.js Server</h1></body>')
  response.write('</html>')
  response.end();
});
server.listen(3000);