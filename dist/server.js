"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Hapi = __importStar(require("hapi"));
const mongoose_1 = __importDefault(require("mongoose"));
const container_route_1 = require("./routes/container.route");
const server = new Hapi.Server({
    port: 3000,
    host: '0.0.0.0',
    routes: {
        cors: {
            origin: ['*']
        }
    }
});
server.route(container_route_1.containerRoutes);
const connectionString = 'mongodb://sanjay:sanjay_11@tyche-cluster1-shard-00-00-uzby1.mongodb.net:27017,tyche-cluster1-shard-00-01-uzby1.mongodb.net:27017,tyche-cluster1-shard-00-02-uzby1.mongodb.net:27017/test?ssl=true&replicaSet=tyche-cluster1-shard-0&authSource=admin&retryWrites=true';
mongoose_1.default
    .connect(connectionString, { useNewUrlParser: true })
    .then(() => console.log('Database Connected'));
server.start().then(() => console.log(`Server started`));
