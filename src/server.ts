import * as Hapi from 'hapi';



const server = new Hapi.Server({ port: 3000 });

server.start().then(_ => console.log('Hapi Server Started'))


