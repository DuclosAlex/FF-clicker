const { DataTypes, Model} = require('sequelize');
const sequelize = require('../database');

class Zone extends Model {}

Zone.init({
    zone_number : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    background_img : {
        type : DataTypes.TEXT
    }
}, {
    sequelize,
    tableName : 'zone'
});

module.exports = Zone;