const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;
const categoryRouter = express.Router();

app.use(morgan('combined'));

categoryRouter.route('/')
  .get((req, res) => {
    res.send('categories');
  });

categoryRouter.route('/categoryGroups')
  .get((req, res) => {
    res.send('categoryGroups');
  });

app.use('/categories', categoryRouter);

app.get('/', (req, res) => {
  debug('response');
  res.send('hello yoll');
});

app.listen(port, () => {
  debug(`listen on port ${port}`);
});
