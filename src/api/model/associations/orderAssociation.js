const userModel = require("../userModel");
const orderModel = require("../orderModel");


orderModel.belongsTo(userModel, {
  foreignKey: { name: "user_id", allowNull: false },
});