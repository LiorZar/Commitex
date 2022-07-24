import { createServer } from "http";
import { Server, Socket } from "socket.io";
import Express, { Application } from "express";
import repository from "./repository";

const app: Application = Express();
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(Express.static("public"));
const server = createServer(app);
const io = new Server(server, {});

io.on("connection", (socket: Socket) => {
    console.log("connected", socket.id)
});
server.listen(3000, () => console.log("Running"));
console.log(repository);
