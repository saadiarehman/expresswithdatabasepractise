const sequelize = require("../../bin/dbConnection");

const { Model, DataTypes } = require("sequelize");


class Students extends Model {

}

Students.init({
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    studentName: {
        type: DataTypes.STRING,

    },
    StudentsEmail: {
        type: DataTypes.STRING
    },
    StudentsAddress: {
        type: DataTypes.STRING
    },


}, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "Students"
});


module.exports = Students;