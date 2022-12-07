const { Sequelize} = require('sequelize');

// ON se connecte à la base de données

const sequelize = new Sequelize(process.env.PG_URL, {
    define: {
        underscored :true
    }
});

module.exports = sequelize;