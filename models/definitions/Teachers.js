const sequelize = require("../../bin/dbConnection");

const { Model, DataTypes } = require("sequelize");


class Teachers extends Model {

}

Teachers.init({
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    teacherEmail: {
        type: DataTypes.STRING,

    },
    teacherContactNumber: {
        type: DataTypes.INTEGER
    },

}, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "Teachers"
});


module.exports = Teachers;