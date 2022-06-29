const orderService = require("../service/orderService");
module.exports = {
  async newOrder(req, res) {
    const {
      body: { refId },
      payload: { id: userId }
    } = req;
    const data = await orderService.newOrder({ refId, userId });
    res.status(200).json(data);
  },
  async allOrders(req, res) {
    const { payload: { id: userId } } = req;
    const data = await orderService.allOrders(userId);
    res.status(200).json(data);
  },
  async deleteOrder(req, res) {
    const {
      payload: { id: userId },
      params: { id }
    } = req
    const data = await orderService.deleteOrder({userId, id});
    res.status(200).json(data);
  },
};
