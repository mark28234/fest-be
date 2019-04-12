import db from '../../db';

export default class UserController {
  static getUser(req, res, next) {
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
  static authenticateUser(req, res, next) {
    let credentials = {
      userName: req.params.userName,
      password: req.params.password
    };
    db.User.findOne({ where: credentials })
      .then((result) => {
        if (result) {
          res.status(200).send(result.dataValues);
        } else {
          res.status(401).send({ error: 'Invalid User or Password' });
        }
      })
      .catch((err) => next(err));
  }
}
