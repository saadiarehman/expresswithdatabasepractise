const config = require("../config.json");
const { Sequelize } = require("sequelize");

// db connection create
const database = new Sequelize(config.db);

// db connection authenticate
database.authenticate().then(() => {

    console.log("Database Connected");
}).catch((error) => {

    console.log(error);
});


module.exports = database;