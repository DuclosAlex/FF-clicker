const generateBasicController = require('../utils/generateBasicController');
const {PersonnageBase} = require('../models');

const basicController = generateBasicController(PersonnageBase.scope());

const personnageBaseController = {

    ...basicController,
}

module.exports = personnageBaseController;