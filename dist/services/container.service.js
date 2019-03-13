"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        console.log(container);
        return container;
    })
        .catch(function (err) {
        console.error(err);
    });
}
exports.createContainer = createContainer;
function getAllUserContainers() {
    return __awaiter(this, void 0, void 0, function* () { });
}
function deleteContainer() {
    return __awaiter(this, void 0, void 0, function* () { });
}
