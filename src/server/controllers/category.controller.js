import db from '../../db';

export default class CategoryController {
  static getCategories(req, res, next) {
    db.Category.findAll()
      .then((result) => {
        if (result) {
          res.status(200).send(result);
        } else {
          res.status(400).send([]);
        }
      })
      .catch((err) => next(err));
  }
}
