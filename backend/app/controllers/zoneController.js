const generateBasicController = require('../utils/generateBasicController');
const {Zone} = require('../models');

const basicController = generateBasicController(Zone.scope());

const zoneController = {

    ...basicController,
}

module.exports = zoneController;