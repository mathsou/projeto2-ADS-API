const userModel = require("../userModel");
const orderModel = require("../orderModel");


userModel.hasMany(orderModel, {
  foreignKey: { name: "user_id", allowNull: false },
});
