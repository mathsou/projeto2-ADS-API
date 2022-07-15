const orderRepository = require("../repository/orderRepository");
const { getOrder } = require("../../service/tchedeliveryApi");

module.exports = {
  async newOrder({ refId, userId }) {
    const order = await getOrder(refId);
    if (order) {
      const orderAlreadyExists = await orderRepository.findOrderByRefId({
        refId: order.order_id,
        userId,
      });
      if (!orderAlreadyExists) {
        await orderRepository.saveOrder({
          refId: order.order_id,
          fee: Number(order.delivery_charge),
          user_id: 13,
          address: order.formatedAddress,
          latitude: order.location.lat,
          longitude: order.location.lng,
        });
      }
      return order;
    }
  },
  async allOrders(userId, dateFrom) {
    const allOrders = await orderRepository.findAll(userId, dateFrom);
    return allOrders;
  },
  async deleteOrder({ userId, id }) {
    const verifyOrder = await orderRepository.findOne(id);
    if (verifyOrder.user_id === userId) {
      const deletedOrder = await orderRepository.deleteOrder(id);
      if (deletedOrder) {
        return {
          msg: "Deletado com sucesso",
        };
      }
    }
    return {
      msg: "Falha ao deletar",
    };
  },
};
