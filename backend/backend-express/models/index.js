const Sequelize = require('sequelize');
const config = require('../db.config');

const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorsAliases: false,
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./userModel')(sequelize, Sequelize);
db.Ingredient = require('./ingredientModel')(sequelize, Sequelize);
db.Recipe = require('./recipeModel')(sequelize, Sequelize);
module.exports = db;