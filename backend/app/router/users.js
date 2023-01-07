const express = require('express');
const { usersController } = require('../controller');

const router = express.Router();

router.get('/:id', usersController.getOneUser);
router.post('/register', usersController.addUser);

module.exports = router;