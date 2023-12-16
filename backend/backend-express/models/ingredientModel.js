module.exports = (sequelize, Sequelize) => {
    const Ingredient = sequelize.define('Ingredient', {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        quantity: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        unit: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true
        }

    }, );

    return Ingredient;
}