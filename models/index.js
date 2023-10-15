const sequelize = require("../bin/dbConnection");

// 
const Students = require("./definitions/Students");
const Courses = require("./definitions/Courses");
const Teachers = require("./definitions/Teachers");
const Roles = require("./definitions/Roles");
const Departments = require("./definitions/Departments");

// M-M table

const studentCourses = require("./definitions/studentCourses");


const models = { Students, Courses, Teachers, Roles, Departments, studentCourses };

const db = {};

//many-many relations between Students-Courses by creating one more table studentCourses

Students.hasMany(studentCourses, {
    foreignKey: "studentCourseId"
});
studentCourses.belongsTo(Students, { foreignKey: "studentCourseId" });


Courses.hasMany(studentCourses, {
    foreignKey: "studentCourseId"
});
studentCourses.belongsTo(Courses, { foreignKey: "studentCourseId" });

// end manytomany relation table

db.sequelize = sequelize;
sequelize.models = models;

module.exports = { models, db };