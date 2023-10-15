const sequelize = require("../../bin/dbConnection");

const { Model, DataTypes } = require("sequelize");


class Departments extends Model {

}

Departments.init({
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    departmentName: {
        type: DataTypes.STRING,

    },


}, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "Departments"
});


module.exports = Departments;