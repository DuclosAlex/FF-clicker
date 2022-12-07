const { DataTypes, Model} = require('sequelize');
const sequelize = require('../database');

class PersonnageBase extends Model {}

PersonnageBase.init({
    name: {
        type: DataTypes.TEXT,
        allowNull : false
    },
    lvl: {
        type: DataTypes.INTEGER,
        allowNull : false
    },
    powerClick: {
        type: DataTypes.INTEGER,
        allowNull : false
    },
    cost: {
        type: DataTypes.INTEGER,
        allowNull : false
    },
    autoClickCost: {
        type: DataTypes.INTEGER,
        allowNull : false
    },
    growthRate : {
        type : DataTypes.DECIMAL(10,5),
        allowNull : false
    },
    images: {
        type: DataTypes.TEXT,
        allowNull : false
    }, 
    game_logo_img : {
        type : DataTypes.TEXT
    },
    quotes : {
        type : DataTypes.TEXT
    }
}, {
    sequelize, 
    tableName : 'personnage_base'
});

module.exports = PersonnageBase;