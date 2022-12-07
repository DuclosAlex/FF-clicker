const { DataTypes, Model} = require('sequelize');
const sequelize = require('../database');

class Teams extends Model {}

Teams.init({
    name : {
        type : DataTypes.TEXT,
        allowNull : false
    }
}, {
    sequelize, 
    tableName : 'teams'
});

module.exports = Teams;