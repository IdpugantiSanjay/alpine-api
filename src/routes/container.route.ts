import * as Hapi from 'hapi';
import { createContainer } from '../services/container.service';
import { IContainer } from '../models/container.model';

const createContainerRoute: Hapi.ServerRoute = {
  path: '/api/{userId}/containers',
  method: 'POST',
  options: {
    handler: function(req: Hapi.Request) {
      return createContainer(req.params.userId, req.payload as IContainer);
    }
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
