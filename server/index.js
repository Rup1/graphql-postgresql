import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import cors from 'cors';
import debug from 'debug';
import models from './models';

const logger = debug('log');

const app = express();

const port = process.env.PORT || 4000;

// enable cross origin resource sharing
app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

//Since this is graphql we make use of a single endpoint which will receive all queries & mutations
app.use(
  '/graphql',
  graphqlHTTP(req => ({
    schema,
    graphiql: true,
    context: req
  }))
);

app.listen(port,
  () => {
    logger(`
      App running on ${port}
      mode and listening on port ${port} ...\n`);
      // models.sequelize.sync(); // keeps sequelize models in sync with database
      /*** 
       * 
       * raw SQL query:
       * select * todos
       * where todos.id 
       * 
       * sequelize abstraction:
       * db.todos.find()
       * 
       * ***/
  });

process.on('uncaughtException', (reason) => {
  console.log(reason)
  process.exit(0);
});

process.on('SIGTERM', () => {
  process.exit(0);
});