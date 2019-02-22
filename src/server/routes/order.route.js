import express from 'express';
import OrderController from '../controllers/order.controller';

const orderRoute = express.Router();

orderRoute.get('/:id', OrderController.getOrders);
orderRoute.post('/', OrderController.addItem);

export default orderRoute;
