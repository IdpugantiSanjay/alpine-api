import * as Hapi from 'hapi';

const createContainerRoute: Hapi.ServerRoute = {
  path: '/api/{userId}/containers',
  method: 'POST',
  handler: function(req: Hapi.Request) {
    return 'Container Created';
  }
};

const getUserContainers: Hapi.ServerRoute = {
  path: '/api/{userId}/containers',
  method: 'GET',
  handler: function(req: Hapi.Request) {
    return 'User Containers';
  }
};

const deleteContainer: Hapi.ServerRoute = {
  path: '/api/{userId}/containers/{containerId}',
  method: 'DELETE',
  handler: function(req: Hapi.Request) {
    return 'Deleted Container';
  }
};

export const containerRoutes = [createContainerRoute, getUserContainers, deleteContainer];
