import { IContainer } from '../models/container.model';

import { Container } from '../mongodb/models/container.dbmodel';

import * as R from 'ramda';

const { merge } = R;

export function createContainer(userId: string, container: IContainer) {
  return Container.create(merge({ userId, createdBy: userId }, container))
    .then(function(container) {
      console.log(container);
      return container;
    })
    .catch(function(err) {
      console.error(err);
    });
}

async function getAllUserContainers() {}

async function deleteContainer() {}
