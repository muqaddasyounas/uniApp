"use server"
import { Sequelize } from "sequelize";

// Remote database configuration
const sequelize = new Sequelize({
  database: 'u463648554_examination',
  username: 'u463648554_team',
  password: 'Examaust1111',
  host: 'srv1455.hstgr.io', // e.g., 'example.com' or IP address
  dialect: 'mysql',
  port: 3306, // Default MySQL port, change if necessary
  dialectModule:require("mysql2") // Disable logging or set to console.log for logging SQL queries
});

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the remote database has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the remote database:', err);
  });

module.exports = sequelize;