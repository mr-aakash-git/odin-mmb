const { Router } = require('express');
const { getHomepage, pushingNewMsgs } = require('../controllers/homepageController');

const homepageRouter = Router();

homepageRouter.get('/', getHomepage);

homepageRouter.post('/', pushingNewMsgs);

module.exports = homepageRouter;