import db from '../../db';

export default class ProductController {
  static getProduct(req, res, next) {
    db.Product.findOne({
      where: { id: req.params.id },
      include: { model: db.Category, as: 'category' }
    })
      .then((result) => {
        if (result) {
          res.status(200).send(result.dataValues);
        } else {
          res.status(400).send({ error: 'No product found with provided id' });
        }
      })
      .catch((err) => next(err));
  }
  static getProducts(req, res, next) {
    db.Product.findAll({ include: { model: db.Category, as: 'category' } })
      .then((result) => {
        if (result) {
          res.status(200).send(result);
        } else {
          res.status(200).send([]);
        }
      })
      .catch((err) => next(err));
  }
  static getProductDescription(req, res, next) {
    db.ProductDescription.findOne({
      where: { id: req.params.id },
      include: {
        model: db.Product,
        as: 'product',
        include: { model: db.Category, as: 'category' }
      }
    })
      .then((result) => {
        if (result) {
          res.status(200).send(result.dataValues);
        } else {
          res.status(400).send({ error: 'No product found with provided id' });
        }
      })
      .catch((err) => next(err));
  }

  static search(req, res, next) {
    const query = req.body;
    db.Product.findAll({
      where: query,
      include: { model: db.Category, as: 'category' }
    })
      .then((result) => {
        if (result) {
          res.status(200).send(result);
        } else {
          res
            .status(400)
            .send({ error: 'No product found with provided features' });
        }
      })
      .catch((err) => next(err));
  }
}
