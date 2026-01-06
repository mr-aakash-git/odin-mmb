const express = require('express');
const app = express();
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));

const path = require("node:path");
const homepageRouter = require('./routes/homepageRouter');
const newMessageRouter = require('./routes/newMessageRouter');
const { log } = require('node:console');
const { messages } = require('./db');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const PORT = process.env.PORT_NUM || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Express app - listening on port ${PORT}!`);
});

app.get('/message/:id', (req, res) => {
  const msgId = Number(req.params.id);
  const msg = messages.find(m => m.added === msgId);
  if(msg) {
  res.render('msg', { message: msg });
  }
  else {
    res.status(404).send("Page not found!")
  }
});

app.post('/message/:id/delete', (req, res) => {
  const msgId = Number(req.params.id);

  const index = messages.findIndex(m => m.added === msgId);

  if (index === -1) {
    return res.status(404).send("Message not found");
  }

  messages.splice(index, 1);
  res.redirect('/');
});

app.use('/new', newMessageRouter);
app.use('/', homepageRouter);

app.use('/new', homepageRouter);