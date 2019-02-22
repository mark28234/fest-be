import db from '../../db';

export default class UserController {
  static getUser(req, res, next) {
    console.log(req.params.id);
    db.User.findOne({ where: { id: req.params.id } })
      .then((result) => {
        if (result) {
          res.status(200).send(result.dataValues);
        } else {
          res.status(400).send({ error: 'No user found with provided id' });
        }
      })
      .catch((err) => next(err));
  }
}
