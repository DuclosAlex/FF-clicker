const { usersModel} = require('../model');

const controller = {

    async getOneUser (req, res) {

        const user = await usersModel.getOneUser(req.params.id);
        res.json(user);

    }
}

module.exports = controller;