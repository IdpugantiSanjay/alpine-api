import { IContainer } from '../models/container.model';

import { Container } from '../mongodb/models/container.dbmodel';

import * as R from 'ramda';

const { merge } = R;

function createContainer(userId: string, container: IContainer) {
  return Container.create(merge({ userId, createdBy: userId }, container))
    .then(function(container) {
      return container;
    })
    .catch(function(err) {
      console.error(err);
    });
}

function userContainers(userId: string) {
  return Container.find({ userId })
    .then(function(containers: any[]) {
      return containers;
    })
    .catch(function(err) {
      console.error(err);
    });
}

async function deleteContainer() {}

export function ContainerService() {}

ContainerService.createContainer = createContainer;
ContainerService.userContainers = userContainers;

// module.exports = [UserContainer];
