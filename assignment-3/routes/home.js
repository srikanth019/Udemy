const express = require("express");

const path = require("path");

const router = express.Router();

const rootPath = require("../util/rootPath");

router.get("/",(req,res,next) => {
    res.sendFile(path.join(rootPath, "views" ,"user-home.html"));
});

module.exports = router;