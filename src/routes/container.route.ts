import * as Hapi from 'hapi';
import { ContainerService } from '../services/container.service';
import { IContainer } from '../models/container.model';

const createContainerRoute: Hapi.ServerRoute = {
  path: '/api/{userId}/containers',
  method: 'POST',
  options: {
    handler: function(req: Hapi.Request) {
      return ContainerService.createContainer(
        req.params.userId,
        req.payload as IContainer
      );
    }
  }
};

const getUserContainers: Hapi.ServerRoute = {
  path: '/api/{userId}/containers',
  method: 'GET',
  handler: function(req: Hapi.Request) {
    return ContainerService.userContainers(req.params.userId);
  }
};

const deleteContainer: Hapi.ServerRoute = {
  path: '/api/{userId}/containers/{containerId}',
  method: 'DELETE',
  handler: function(req: Hapi.Request) {
    return ContainerService.deleteContainer(req.params.containerId as string);
  }
};

export const containerRoutes = [createContainerRoute, getUserContainers, deleteContainer];
