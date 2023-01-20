const path = require("path");

const express = require('express');
const router = express.Router();

//Here The redirecting path or (url)- /admin/add-product => "GET" method.
router.get("/add-product",(req,res,next) => {
    res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

//redirecting path (url) : /admin/add-product => "POST" method.
router.post("/add-product",(req,res,next) => {
    console.log(req.body);
    res.redirect("/");
});
module.exports = router;