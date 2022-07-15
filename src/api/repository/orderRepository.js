const orderModel = require("../model/orderModel");
const { Op } = require("sequelize");

module.exports = {
  async findAll(user_id, dateFrom) {
    let where = { user_id };
    if (dateFrom) where.created_at = { [Op.gt]: dateFrom };
    return await orderModel.findAll({
      where,
      order: [["id", "DESC"]],
    });
  },
  async findOne(id) {
    return await orderModel.findOne({
      where: { id },
    });
  },
  async findOrderByRefId({ refId, userId: user_id }) {
    return await orderModel.findOne({
      where: { refId, user_id },
    });
  },
  async saveOrder(payload) {
    return await orderModel.build(payload).save();
  },
  async deleteOrder(id) {
    return await orderModel.destroy({
      where: { id },
    });
  },
};
