const { personnageBaseModel } = require('../model');

const controller = {

    async getAllPersonnages (req, res) {

        const allPerso = await personnageBaseModel.getAllPerso();

        res.json(allPerso);
    }
}

module.exports = controller;