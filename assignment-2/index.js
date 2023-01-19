const express = require("express");

const app = express();

app.use("/",(req,res,next) => {
    console.log("This first middleware and always run");
    next();
});


app.use("/user",(req,res,next) => {
    console.log("It the another Middleware");
    res.send("<h1>Hello from Express server!</h1>")
});

app.use("/",(req,res,next) => {
    console.log("This last middleware");
    res.send("Thank you");
});




app.listen(3004);

