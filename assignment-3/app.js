const express = require("express");

const path = require("path");

const app = express();

const homeRouter = require("./routes/home");

const adminRouter = require("./routes/admin");

app.use(express.static(path.join(__dirname, "public")))

app.use(adminRouter);

app.use(homeRouter);

app.listen(3000);