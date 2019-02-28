import express from 'express';
const bodyParser = require('body-parser');
import routes from './routes';

export default class Server {
  static init(port, ip) {
    const app = new express();

    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
      );
      next();
    });

    app.use(bodyParser.json());

    app.get('/', (req, res) => {
      res.send('Server is running');
    });

    app.use('/api', routes);

    app.listen(port, ip);

    console.log(`Server is running @ ${ip}:${port}/api`);
  }
}
