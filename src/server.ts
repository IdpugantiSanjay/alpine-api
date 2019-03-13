import * as Hapi from 'hapi';

import mongoose from 'mongoose';

import { containerRoutes } from './routes/container.route';

const server = new Hapi.Server({
  port: 3000,
  host: '0.0.0.0',
  routes: {
    cors: {
      origin: ['*']
    }
  }
});

server.route(containerRoutes);

const connectionString =
  'mongodb://sanjay:sanjay_11@tyche-cluster1-shard-00-00-uzby1.mongodb.net:27017,tyche-cluster1-shard-00-01-uzby1.mongodb.net:27017,tyche-cluster1-shard-00-02-uzby1.mongodb.net:27017/test?ssl=true&replicaSet=tyche-cluster1-shard-0&authSource=admin&retryWrites=true';

mongoose
  .connect(connectionString, { useNewUrlParser: true })
  .then(() => console.log('Database Connected'));

server.start().then(() => console.log(`Server started`));
