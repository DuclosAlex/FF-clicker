const { DataTypes, Model} = require('sequelize');
const sequelize = require('../database');

class Inventory extends Model {}

Inventory.init({
    xp_amount: {
        type : DataTypes.INTEGER,
        allowNull: false
    },
    powerclick_amount: {
        type : DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize, 
    tableName : 'inventory'
});

module.exports = Inventory;