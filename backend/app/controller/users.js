const { usersModel} = require('../model');

const controller = {

    async getOneUser (req, res) {

        const user = await usersModel.getOneUser(req.params.id);
        res.json(user);

    },

    async addUser(req, res) {

        const user = req.body;

        console.log(user);

        const userDB = await usersModel.insertUser(user);

        console.log(userDB)

        res.json(userDB);
    }
}

module.exports = controller;