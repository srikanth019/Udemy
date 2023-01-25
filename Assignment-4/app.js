const express = require("express");

const path = require("path");

const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const userData = require("./routes/user-form");
const userListRouter = require("./routes/user-list");

//serving static css files
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(userData.router);
app.use(userListRouter);

app.listen(3000);