const sequelize = require("../../bin/dbConnection");

const { Model, DataTypes } = require("sequelize");


class studentCourses extends Model {

}

studentCourses.init({
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },


}, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "studentCourses"
});


module.exports = studentCourses;