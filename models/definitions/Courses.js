const sequelize = require("../../bin/dbConnection");

const { Model, DataTypes } = require("sequelize");


class Courses extends Model {

}

Courses.init({
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    courseName: {
        type: DataTypes.STRING,

    },
    courseInstructor: {
        type: DataTypes.STRING
    },

}, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "Courses"
});


module.exports = Courses;