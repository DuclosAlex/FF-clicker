const { monsterModel } = require('../model');

const controller = {

    async getOneMonster(req, res) {

        const monster = await monsterModel.getOneMonster(req.params.id);
        res.json(monster);
    }
}

module.exports = controller;