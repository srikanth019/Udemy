const express = require("express");

const rootPath = require("../util/path");

const path = require("path");

const router = express.Router();

const userList = [];

router.get("/", (req,res,next) => {
    //res.sendFile(path.join(__dirname,"..","views","user-form.html"));
    //res.sendFile(path.join(rootPath,"views","user-form.html"));
    res.render("user-form",{pageTitle: "user form"});
});

router.post("/user",(req,res,next) => {
    // console.log(req.body);
    userList.push(req.body);
    res.redirect("/user");
})

exports.router = router;
exports.userList = userList;


