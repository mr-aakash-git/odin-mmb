const express = require('express');
const app = express();
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));

const path = require("node:path");
const homepageRouter = require('./routes/homepageRouter');
const newMessageRouter = require('./routes/newMessageRouter');
const { log } = require('node:console');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const PORT = process.env.PORT_NUM;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Express app - listening on port ${PORT}!`);
});

app.use('/new', newMessageRouter);
app.use('/', homepageRouter);

app.use('/new', homepageRouter);