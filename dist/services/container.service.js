"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const container_dbmodel_1 = require("../mongodb/models/container.dbmodel");
const R = __importStar(require("ramda"));
const { merge } = R;
function createContainer(userId, container) {
    return container_dbmodel_1.Container.create(merge({ userId, createdBy: userId }, container))
        .then(function (container) {
        return container;
    })
        .catch(function (err) {
        console.error(err);
    });
}
function userContainers(userId) {
    return container_dbmodel_1.Container.find({ userId })
        .then(function (containers) {
        return containers;
    })
        .catch(function (err) {
        console.error(err);
    });
}
function deleteContainer(container) {
    return container_dbmodel_1.Container.deleteOne(container)
        .then(function (response) {
        return response;
    })
        .catch(function (err) {
        console.error(JSON.stringify(err));
    });
}
function ContainerService() { }
exports.ContainerService = ContainerService;
ContainerService.createContainer = createContainer;
ContainerService.userContainers = userContainers;
ContainerService.deleteContainer = deleteContainer;
// module.exports = [UserContainer];
