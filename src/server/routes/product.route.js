import express from 'express';
import ProductController from '../controllers/product.controller';

const productRoute = express.Router();

productRoute.get('/:id', ProductController.getProduct);
productRoute.get('/', ProductController.getProducts);
productRoute.get('/description/:id', ProductController.getProductDescription);
productRoute.post('/search', ProductController.search);

export default productRoute;
