const express = require("express");

const path = require("path");

const router = express.Router();

const rootPath = require("../util/rootPath");

router.get("/users",(req,res,next) => {
    res.sendFile(path.join(rootPath, "views" ,"user-add.html"));
});

router.post("/users",(req,res,next) => {
    res.redirect("/");
});

module.exports = router;