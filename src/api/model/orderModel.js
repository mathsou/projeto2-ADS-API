const database = require("../../database");
const sequelize =require("sequelize");
const { DataTypes } = sequelize;
const { INTEGER, STRING, FLOAT, DATE} = DataTypes;

const orderModel = database.define(
  "order",
  {
    id: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    refId: {
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
    address: {
      type: STRING,
      allowNull: false,
    },
    latitude: {
      type: FLOAT,
      allowNull: false,
    },
    longitude: {
      type: FLOAT,
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

module.exports = orderModel;
