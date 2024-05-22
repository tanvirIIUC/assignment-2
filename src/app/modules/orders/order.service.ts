import { ProductModel } from '../products/product.model';
import { Order } from './order.interface'
import { OrderModel } from './order.model'


const createOrder = async (order: Order) => {
    try {
      
      const product = await ProductModel.findById(order.productId);
      if (!product) {
        throw new Error('Product not found');
      }
  
    
      if (order.quantity > product.inventory.quantity) {
        throw new Error('Insufficient quantity available in inventory');
      }
  
    
      product.inventory.quantity -= order.quantity;
      product.inventory.inStock = product.inventory.quantity > 0;
  
      await product.save();
  
     
      const newOrder = await OrderModel.create(order);
      return newOrder;
    } catch (error) {
      throw new Error(`Error creating`);
    }
  };

const getAllOrders = async () => {
    try {
      const orders = await OrderModel.find();
      return orders;
    } catch (error) {
      throw new Error(`Error fetching`);
    }
  };

 const getOrdersByEmail = async (email: string) => {
    try {
        console.log(OrderModel)
      const orders = await OrderModel.find({ email });
      return orders;
    } catch (error) {
      throw new Error(`Error fetching orders by email`);
    }
  };
export const OrderServices = {
  createOrder,
  getAllOrders,
  getOrdersByEmail,
}
