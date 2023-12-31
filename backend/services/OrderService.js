const Order = require("../models/Order.model");

class OrderService {
  async addOrder(orderData) {
    try {
      const order = new Order(orderData);
      const createOrder = await order.save();
      return createOrder;
    } catch (error) {
      throw error;
    }
  }

  async getOrders() {
    try {
      const orders = await Order.find();
      return orders;
    } catch (error) {
      throw error;
    }
  }

  async getOrder(id) {
    try {
      const order = await Order.findById(id);
      return order;
    } catch (error) {
      throw error;
    }
  }

  async updateOrder(id, orderData) {
    try {
      const existingOrder = await Order.findById(id);

      if (!existingOrder) {
        throw new Error("There is no order to update");
      }

      const updateOrder = await Order.findByIdAndUpdate(id, orderData, { new: true });
      return updateOrder;
    } catch (error) {
      throw error;
    }
  }

  async removeOrder(id) {
    try {
        const existingOrder = await Order.findById(id);

        if (!existingOrder) {
          throw new Error("There is no order to update");
        }

      const removeOrder = await Order.findByIdAndDelete(id);
      return removeOrder;
    } catch (error) {
      throw error;
    }
  }

  async getPendingOrders() {
    try {
      const pendingOrders = await Order.find({ approvalStates: 'pending' });
      return pendingOrders;
    } catch (error) {
      throw error;
    }
  }
  async getRejectOrders() {
    try {
      const RejectOrders = await Order.find({ approvalStates: 'rejected' });
      return RejectOrders;
    } catch (error) {
      throw error;
    }
  } 
  async getDeliveryOrders() {
    try {
      const DeliveryOrders = await Order.find({ approvalStates: 'delivery' });
      return DeliveryOrders;
    } catch (error) {
      throw error;
    }
  } 
  async getDeliveryRejectedOrders() {
    try {
      const DeliverRejectedOrders = await Order.find({ approvalStates: 'deliveryreject' });
      return DeliverRejectedOrders;
    } catch (error) {
      throw error;
    }
  } 
}

module.exports = new OrderService();
