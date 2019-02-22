import express from 'express';
import CartController from '../controllers/cart.controller';

const cartRoute = express.Router();

cartRoute.get('/:id', CartController.getCart);
cartRoute.post('/', CartController.addItem);

export default cartRoute;
