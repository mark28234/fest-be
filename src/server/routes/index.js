import express from 'express';
import userRoute from './user.route';
import productRoute from './product.route';
import cartRoute from './cart.route';
import orderRoute from './order.route';
import categoryRoute from './category.route';
import repoRoute from './repo.route';

const router = express.Router();

router.use('/user', userRoute);
router.use('/product', productRoute);
router.use('/cart', cartRoute);
router.use('/order', orderRoute);
router.use('/category', categoryRoute);
router.use('/repo', repoRoute);

export default router;
