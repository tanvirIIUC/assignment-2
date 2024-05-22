// order.router.ts
import express from 'express';
import { orderController } from './order.controller';


const router = express.Router();

router.post('/orders', orderController.createOrderController);
router.get('/orders', orderController.getAllOrdersController);
router.get('/order', orderController.getOrdersByEmailController);


export const orderRoutes = router;