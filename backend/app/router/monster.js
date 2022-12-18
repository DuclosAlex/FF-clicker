const { monsterController } = require('../controller');
const express = require('express');
const router = express.Router();

router.get('/:id', monsterController.getOneMonster);

module.exports = router;