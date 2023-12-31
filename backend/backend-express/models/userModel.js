module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        fullName: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        }
    }, );
    
    return User;
}