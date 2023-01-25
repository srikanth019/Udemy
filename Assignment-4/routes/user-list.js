const express = require("express");

const rootPath = require("../util/path");

const path = require("path");

const userData = require("./user-form")

const router = express.Router();

router.get("/user", (req,res,next) => {
    //res.sendFile(path.join(__dirname,"..","views","user-form.html"));
    // res.sendFile(path.join(rootPath,"views","user-list.html"));
    const userList = userData.userList;
    res.render("user-list",{
        pageTitle: "user list",
        users: userList 
    });
    console.log(userList);
});

module.exports = router;