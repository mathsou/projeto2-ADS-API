const userModel = require("./userModel");
const orderModel = require("./orderModel");

require("./associations/userAssociation");
require("./associations/orderAssociation");

module.exports = {
  userModel,
  orderModel,
};
