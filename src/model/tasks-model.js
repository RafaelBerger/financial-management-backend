const sequelize = require("../db/database");
const { DataTypes } = require("sequelize");
require("dotenv").config();

const Tasks = sequelize.define(
  "Tasks",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    descriptions: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    money: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    positive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    data_registro: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  { timestamps: false, tableName: "tasks" }
);

module.exports = Tasks;



module.exports = Tasks;