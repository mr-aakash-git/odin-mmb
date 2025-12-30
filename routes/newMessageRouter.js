const { Router } = require('express');
const getNewMessage = require('../controllers/newMessageController');
const newMessageRouter = Router();

newMessageRouter.get('/', getNewMessage);

module.exports = newMessageRouter;