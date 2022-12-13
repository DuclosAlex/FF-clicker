const PersonnageBase = require('./personnage_base');
const Monster = require('./monster');
const Users = require('./users');
const PersonnagesFromUser = require('./personnages_from_user');
const Inventory = require('./inventory');
const Stage = require('./stages');
const Zone = require('./zone');

// USER

Users.hasOne(Inventory, {
    foreignKey: {
        name : "users_id"
    },
    as: 'inventory'
});
// Inventory 

Inventory.belongsTo(Users, {
    foreignKey: {
        name : 'users_id',
    }, 
    as : 'users'
});

// Monser/Stage relation 

Stage.hasMany(Monster, {
    foreignKey : {
        name : "stage_id"
    },
    as : "monster"
})

Monster.belongsTo(Stage, {
    foreignKey : {
        name : "stage_id"
    }, 
    as : 'stages'
});

// Export de mes modèles

module.exports = {
    PersonnageBase,
    Monster,
    Users,
    PersonnagesFromUser,
    Inventory,
    Stage,
    Zone
}