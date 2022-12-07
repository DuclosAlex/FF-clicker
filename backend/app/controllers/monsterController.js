const generateBasicController = require('../utils/generateBasicController');
const {Monster} = require('../models');

const basicController = generateBasicController(Monster.scope());

const monsterController = {

    ...basicController,
}

module.exports = monsterController;