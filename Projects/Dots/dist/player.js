"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const dot_1 = require("./dot");
const repository_1 = __importDefault(require("./repository"));
class Player {
    constructor(sock) {
        this.dot = new dot_1.Dot();
        this._id = 0;
        this.onDisconnect = () => {
            repository_1.default.game.onPlayerDisconnect(this);
            repository_1.default.db.Query(`update sessions set ctime=GETDATE() where id = '${this.session}'`);
        };
        this.onRegister = (gname, password, fname, lname) => {
            if (this._id > 0)
                this.sock.emit("register", false, "already logged in");
            else {
                repository_1.default.db.Query(`insert users (gname, password, fname, lname) values ('${gname}','${password}','${fname}','${lname}')`, (res) => {
                    this.sock.emit("register", "error" !== res, "");
                });
            }
        };
        this.onLogin = (name, password) => {
            if (this._id > 0)
                this.sock.emit("login", false, "already logged in");
            else {
                repository_1.default.db.Query(`select id from users where gname = '${name}' and password = '${password}'`, (res) => {
                    if (res.length <= 0)
                        this.sock.emit("login", false, "wrong gamer name or password");
                    else {
                        this._id = res[0].id;
                        this.sock.emit("login", true, this.id);
                        console.log("logged-in", this.id);
                        this.dot.name = name;
                    }
                });
            }
        };
        this.sock = sock;
        this.sock.on("disconnect", this.onDisconnect);
        this.sock.on("login", this.onLogin);
        this.sock.on("register", this.onRegister);
        this.sock.on("join", () => repository_1.default.game.onPlayerJoining(this));
        this.sock.on("joined", (currTime) => this.dot.latency = Math.min(0.2, ((new Date()).getTime() - currTime) / 2000.0));
        this.sock.on("latency", () => repository_1.default.game.onPlayerLatency(this));
        this.sock.on("message", (code, data) => repository_1.default.game.onPlayerMessage(this, code, data));
        repository_1.default.db.Query(`insert sessions (id) values('${this.session}')`);
    }
    get id() { return this._id; }
    get session() { return this.sock.id; }
}
exports.Player = Player;
