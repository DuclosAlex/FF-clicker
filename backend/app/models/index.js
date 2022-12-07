const PersonnageBase = require('./personnage_base');
const Monster = require('./monster');
const Users = require('./users');
const PersonnagesFromUser = require('./personnages_from_user');
const Teams = require('./teams');
const Inventory = require('./inventory');


// USER

Users.hasOne(Teams, {
    foreignKey: {
        name : 'users_id'
    },
    as: 'teams'
});

Users.hasOne(Inventory, {
    foreignKey: {
        name : "users_id"
    },
    as: 'inventory'
});

//Teams 

Teams.belongsTo(Users, {
    foreignKey: {
        name : 'users_id',
    }, 
    as : 'users'
});

// Inventory 

Inventory.belongsTo(Users, {
    foreignKey: {
        name : 'users_id',
    }, 
    as : 'users'
});



// RELATION Teams/PersonnageFromUser

Teams.hasMany(PersonnagesFromUser, {
    foreignKey: {
       name : 'teams_id'       
    },
    as : 'personnages'
});

PersonnagesFromUser.belongsTo(Teams, {
    foreignKey : {
        name : 'teams_id',
        allowNull : false
    },
    as : 'personnages'
});

// Export de mes modèles

module.exports = {
    PersonnageBase,
    Monster,
    Users,
    Teams,
    PersonnagesFromUser,
    Inventory
}