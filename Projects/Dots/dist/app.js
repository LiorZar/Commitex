"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const express_1 = __importDefault(require("express"));
const repository_1 = __importDefault(require("./repository"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static("public"));
const server = (0, http_1.createServer)(app);
repository_1.default.io = new socket_io_1.Server(server, {});
repository_1.default.io.on("connection", (socket) => {
    console.log("connected", socket.id);
    repository_1.default.game.NewConnection(socket);
});
server.listen(3000, () => repository_1.default.Init());
