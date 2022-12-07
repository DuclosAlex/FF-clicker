const { DataTypes, Model } = require('sequelize');
const sequelize = require("../database");

class Monster extends Model {}

Monster.init({
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    images: {
        type: DataTypes.TEXT,
        allowNull : false
    }
}, {
    sequelize, 
    tableName : 'monster'
});

module.exports = Monster;