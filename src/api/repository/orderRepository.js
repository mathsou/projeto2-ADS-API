const orderModel = require("../model/orderModel");

module.exports = {
  async findAll(user_id) {
    return await orderModel.findAll({
      where: {user_id},
      ordering: [['id', 'DESC']]
    });
  },
  async findOne(id){
    return await orderModel.findOne({
      where: {id},
    });
  },
  async findOrderByRefId({refId, userId: user_id}) {
    return await orderModel.findOne({
      where: {refId, user_id},
    });
  },
  async saveOrder(payload) {
    return await orderModel.build(payload).save();
  },
  async deleteOrder(id) {
    return await orderModel.destroy({
      where: { id },
    });
  }
};
