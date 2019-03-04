import db from '../../db';

export default class CartController {
  static getCart(req, res, next) {
    db.CartItem.findAll({
      where: { userId: req.params.id },
      include: [
        {
          model: db.User,
          as: 'user'
        },
        {
          model: db.Product,
          as: 'product'
        }
      ]
    })
      .then((result) => {
        if (result) {
          res.status(200).send(result);
        } else {
          res.status(200).send([]);
        }
      })
      .catch((err) => next(err));
  }
  static addItem(req, res, next) {
    const { userId, productId, quantity } = req.body;
    let query = `INSERT INTO CartItem (userId, productId, quantity) VALUES (?, ?, ?)`;
    db.sequelize
      .query(query, { replacements: [userId, productId, quantity] })
      .then((result) => {
        if (result) {
          res.status(201).send(true);
        } else {
          res.status(400).send({ error: 'Unable to add item to cart' });
        }
      })
      .catch((err) => next(err));
  }
}
