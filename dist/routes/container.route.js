"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const container_service_1 = require("../services/container.service");
const createContainerRoute = {
    path: '/api/{userId}/containers',
    method: 'POST',
    options: {
        handler: function (req) {
            return container_service_1.ContainerService.createContainer(req.params.userId, req.payload);
        }
    }
};
const getUserContainers = {
    path: '/api/{userId}/containers',
    method: 'GET',
    handler: function (req) {
        return container_service_1.ContainerService.userContainers(req.params.userId);
    }
};
const deleteContainer = {
    path: '/api/{userId}/containers/{containerId}',
    method: 'DELETE',
    handler: function (req) {
        return 'Deleted Container';
    }
};
exports.containerRoutes = [createContainerRoute, getUserContainers, deleteContainer];
