const express = require("express");

//parsing incoming requests

const bodyParser = require("body-parser");

const app = express();
app.get(bodyParser.urlencoded({extended: false})); 

app.use("/add-product",(req,res,next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="Product-Name"/><button type="submit">add-product</button></form>');
});

app.post("/product",(req,res,next) => {
    console.log(req.body);
    res.redirect("/");
});

app.use("/",(req,res,next) => { 
    res.send("<h1>Thank you!</h1>");
});

app.listen(3000);

