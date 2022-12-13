const { DataTypes, Model} = require('sequelize');
const sequelize = require('../database');

class Stage extends Model {}

Stage.init({
    stage_number : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    number_of_monster : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    gold_obtainable : {
        type : DataTypes.INTEGER,
        allowNull : false
    }
}, {
    sequelize,
    tableName : 'stages'
});

module.exports = Stage;