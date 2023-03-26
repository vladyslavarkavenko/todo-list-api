const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const authRouter = require("./routers/auth");
const todoRouter = require("./routers/todos");

const app = express();

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Routers
app.use("/auth", authRouter);
app.use("/todos", todoRouter);

module.exports = app;