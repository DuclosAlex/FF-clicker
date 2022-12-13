const { DataTypes, Model } = require('sequelize');
const sequelize = require("../database");

class Monster extends Model {}

Monster.init({
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    image: {
        type: DataTypes.TEXT,
        allowNull : false
    },
    pv: {
        type : DataTypes.INTEGER
    },
    is_boss: {
        type : DataTypes.BOOLEAN
    }
}, {
    sequelize, 
    tableName : 'monster'
});

module.exports = Monster;