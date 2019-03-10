import * as Hapi from 'hapi';

export const containerRoutes: Hapi.ServerRoute[] = [];

const createContainerRoute: Hapi.ServerRoute = {
  method: 'POST',
  path: '/',
  handler: function() {}
};

const deleteContainerRoute: Hapi.ServerRoute = {
  method: 'DELETE',
  path: '/{containerId}',
  handler: function() {}
};

const getAllUserContainersRoute: Hapi.ServerRoute = {
  method: 'GET',
  path: '/',
  handler: function() {}
};
