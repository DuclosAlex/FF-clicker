const express = require('express');
const { personnageBaseController } = require('../controller');

const router = express.Router();

router.get('/', personnageBaseController.getAllPersonnages);

module.exports = router;
