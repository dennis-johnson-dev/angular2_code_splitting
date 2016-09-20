const Hapi = require('hapi');
const Inert = require('inert');
const Path = require('path');

const server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: Path.join(__dirname, '../public')
      }
    }
  }
});
server.connection({ port: 3011 });

server.register(Inert, () => {});

server.route({
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: '.',
      redirectToSlash: true,
      index: true
    }
  },
  config: {
    cache: {
      expiresIn: 60*60*60*1000,
      statuses: [200]
    }
  }
});

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});
