const express = require("express"); 
const personnageBaseController = require('./controllers/personnage_baseController');
const monsterController = require('./controllers/monsterController');
const inventoryController = require('./controllers/inventoryController');
const zoneController = require('./controllers/zoneController');

const router = express.Router();

router.route('/personnage_base')
  .get(personnageBaseController.getAll)
  .post(personnageBaseController.create);

router.route('/personnage_base/:id')
  .get(personnageBaseController.getOne)
  .patch(personnageBaseController.update)
  .delete(personnageBaseController.delete);

  router.route('/monster')
  .get(monsterController.getAll)
  .post(monsterController.create);

router.route('/monster/:id')
  .get(monsterController.getOne)
  .patch(monsterController.update)
  .delete(monsterController.delete);


router.route('/inventory')
  .get(inventoryController.getAll)
  .post(inventoryController.create);

router.route('/inventory/:id')
  .get(inventoryController.getOne)
  .patch(inventoryController.update)
  .delete(inventoryController.delete);


module.exports = router;