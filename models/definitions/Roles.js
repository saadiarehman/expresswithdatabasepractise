const sequelize = require("../../bin/dbConnection");

const { Model, DataTypes } = require("sequelize");


class Roles extends Model {

}

Roles.init({
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    roleTitle: {
        type: DataTypes.STRING,

    }

}, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "Roles"
});


module.exports = Roles;