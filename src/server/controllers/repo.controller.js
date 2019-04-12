import db from '../../db';

export default class RepoController {
  static getRepo(req, res, next) {
    db.Repo.findOne({ where: { id: req.params.id } })
      .then((result) => {
        if (result) {
          res.status(200).send(result.dataValues);
        } else {
          res.status(400).send({ error: 'No repo found with provided id' });
        }
      })
      .catch((err) => next(err));
  }
  static getRepos(req, res, next) {
    db.Repo.findAll()
      .then((result) => {
        if (result) {
          res.status(200).send(result);
        } else {
          res.status(200).send([]);
        }
      })
      .catch((err) => next(err));
  }
  static updateRepo(req, res, next) {
    const repo = req.body;
    db.Repo.findOne({ where: { id: repo.id } })
      .then((result) => {
        if (result) {
          result
            .update(repo)
            .then(() => {
              res.status(201).send(repo);
            })
            .catch((err) =>
              res
                .status(500)
                .send({ error: 'Unable to update the repo details.\n' + err })
            );
        } else {
          res.status(400).send({ error: 'No repo found with provided id' });
        }
      })
      .catch((err) => next(err));
  }
}
