const database = require("../../database");
const sequelize =require("sequelize");
const { DataTypes } = sequelize;
const { INTEGER, STRING, BOOLEAN, FLOAT } = DataTypes;

const orderModel = database.define(
  "order",
  {
    id: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    external_id: {
      type: INTEGER.UNSIGNED,
      allowNull: true,
    },
    fee: {
      type: FLOAT(6,2),
      allowNull: false,
    },
    user_id: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
    },
    recurrenceTypeId: {
      type: INTEGER.UNSIGNED,
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
    tableName: "orders",
    paranoid: true,
    createdAt: "created_at",
    updatedAt: "modified_at",
    deletedAt: "deleted_at",
  }
);

module.exports = jobModel;
