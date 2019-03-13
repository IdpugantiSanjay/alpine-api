import * as Hapi from 'hapi';

const server = new Hapi.Server({
  port: 3000,
  host: '0.0.0.0'
});

server.start().then(() => console.log(`Server started`));
