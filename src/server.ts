import * as Hapi from 'hapi';
import { containerRoutes } from '../routes/container.routes';

const server = new Hapi.Server({
  port: 3000,
  routes: {
    cors: {
      origin: ['*']
    }
  }
});

server.route(containerRoutes);

server.start().then(_ => console.log('Hapi Server Started'));
