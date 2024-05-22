
import { Request, Response } from 'express';
import { OrderServices } from './order.service';
import orderValidationSchema from './order.validation';



const createOrderController = async (req: Request, res: Response) => {
    try {
      const { error, value } = orderValidationSchema.validate(req.body);
      if (error) {
        return res.status(400).json({
          success: false,
          message: 'Validation error',
          error: error.details,
        });
      }
  
      const newOrder = await OrderServices.createOrder(value);
      res.status(201).json({
        success: true,
        message: 'Order created successfully!',
        data: newOrder,
      });
    } catch (error) {
      console.error('Error creating order:', error);
      res.status(500).json({
        success: false,
        message: "Error creating",
      });
    }
  };

const getAllOrdersController = async (req: Request, res: Response) => {
    try {
      const orders = await OrderServices.getAllOrders();
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully!',
        data: orders,
      });
    } catch (error) {
      console.error('Error fetching orders:', error);
      res.status(500).json({
        success: false,
        message:"Error fetching order",
      });
    }
  };

  const getOrdersByEmailController = async (req: Request, res: Response) => {
    try {
      const email = req.query.email as string;
      if (!email) {
        return res.status(400).json({
          success: false,
          message: 'Email query parameter is required',
        });
      }
  
      const orders = await OrderServices.getOrdersByEmail(email);
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully for user email!',
        data: orders,
      });
    } catch (error) {
      console.error('Error fetching orders by email:', error);
      res.status(500).json({
        success: false,
        message: "Error fetching orders by email",
      });
    }
  };

export const orderController = {
    createOrderController,
    getAllOrdersController,
    getOrdersByEmailController,
 
  }