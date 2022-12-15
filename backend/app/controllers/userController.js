const generateBasicController = require('../utils/generateBasicController');
const {Users, Inventory} = require('../models');



const userController = {

    async getOne(req,res) {

        const id = Number(req.params.id);

        const result = await Users.findOne({
            where : {
                id : id
            },
            include : 'inventory'
        });
        res.json(result)
    }
}

module.exports = userController;