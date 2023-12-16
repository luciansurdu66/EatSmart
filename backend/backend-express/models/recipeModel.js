module.exports = (sequelize, Sequelize) => {
    const Recipe = sequelize.define('Recipe', {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        ingredients: {
            type: Sequelize.STRING,
            allowNull: false
        },
        image: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }, );

    return Recipe;
}