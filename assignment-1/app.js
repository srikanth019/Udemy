const http = require("http");
const {requestHandler, userText} = require("./rout");
console.log(userText)
const server = http.createServer(requestHandler);
//console
server.listen(3000);
