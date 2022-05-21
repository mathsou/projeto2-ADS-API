const database = require("../../database");
const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;
const { INTEGER, STRING, DATE } = DataTypes;

const userModel = database.define(
  "user",
  {
    id: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: STRING(30),
      allowNull: false,
    },
    last_name: {
      type: STRING(30),
      allowNull: false,
    },
    email: {
      type: STRING(80),
      allowNull: false,
    },
    password: {
      type: STRING(50),
      allowNull: false,
    },
    phone: {
      type: STRING(11),
      allowNull: false,
    },
    created_at: {
      type: DATE,
      allowNull: false,
    },
    modified_at: {
      type: DATE,
    },
    deleted_at: {
      type: DATE,
      allowNull: true,
    },
  },
  {
    tableName: "users",
    paranoid: true,
    createdAt: "created_at",
    updatedAt: "modified_at",
    deletedAt: "deleted_at",
  }
);

module.exports = userModel;
