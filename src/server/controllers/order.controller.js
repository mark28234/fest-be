import db from '../../db';

export default class OrderController {
  static getOrders(req, res, next) {
    db.Order.findAll({
      where: { userId: req.params.id },
      include: [
        {
          model: db.User,
          as: 'user'
        },
        {
          model: db.OrderStatus,
          as: 'status'
        },
        {
          model: db.OrderItem,
          as: 'items',
          include: {
            model: db.Product,
            as: 'product'
          }
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
    const { userId, statusId, items } = req.body;
    let addOrderQuery = `INSERT INTO \`ORDER\` (userId, statusId, date) VALUES (?, ?, ?)`;
    db.sequelize.transaction().then((transaction) => {
      db.sequelize
        .query(addOrderQuery, { replacements: [userId, statusId, new Date()] })
        .then((result) => {
          console.log(result);
          if (result) {
            items.forEach((item) => {
              let addOrderItemQuery = `INSERT INTO ORDERITEM (orderId, productId, quantity) VALUES (?, ?, ?)`;
              db.sequelize
                .query(addOrderItemQuery, {
                  replacements: [result[0], item.productId, item.quantity]
                })
                .then((result) => {
                  if (result) {
                    transaction.commit();
                    res.status(200).send(true);
                  }
                })
                .catch((err) => {
                  transaction.rollback();
                  next(err);
                });
            });
          } else {
            transaction.rollback();
            res.status(400).send({ error: 'Unable to create order' });
          }
        })
        .catch((err) => {
          transaction.rollback();
          next(err);
        });
    });
  }
}
