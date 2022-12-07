const generateBasicController = require('../utils/generateBasicController');
const {Inventory} = require('../models');

const basicController = generateBasicController(Inventory.scope());

const inventoryController = {

    ...basicController,
}

module.exports = inventoryController;