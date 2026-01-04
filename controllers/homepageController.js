const { messages } = require('../db');

const getHomepage = async (req, res) => {
  res.render('index', { title: "Mini Messageboard", messages: messages });
};

const pushingNewMsgs = async (req, res) => {
  messages.push({ text: req.body.msg, user: req.body.author, added: Date.now() });
  res.redirect('/');
};

module.exports = { getHomepage, pushingNewMsgs };