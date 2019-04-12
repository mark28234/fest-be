import express from 'express';
import RepoController from '../controllers/repo.controller';

const repoRoute = express.Router();

repoRoute.get('/', RepoController.getRepos);
repoRoute.get('/:id', RepoController.getRepo);
repoRoute.post('/', RepoController.updateRepo);

export default repoRoute;
