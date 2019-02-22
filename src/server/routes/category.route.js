import express from 'express';
import CategoryController from '../controllers/category.controller';

const categoryRoute = express.Router();

categoryRoute.get('/', CategoryController.getCategories);

export default categoryRoute;
