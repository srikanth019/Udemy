const http = require("http");
const {requestHandler, userText} = require("./rout");
console.log(userText)
const server = http.createServer(requestHandle);
//console
server.listen(3000)
