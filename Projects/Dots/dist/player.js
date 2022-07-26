"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const repository_1 = __importDefault(require("./repository"));
class Player {
    constructor(sock) {
        this._id = 0;
        this._hp = 0;
        this.onDisconnect = () => {
            repository_1.default.game.onPlayerDisconnect(this);
            repository_1.default.db.Query(`update sessions set ctime=GETDATE() where id = '${this.session}'`);
        };
        this.onRegister = (gname, password, fname, lname) => {
            if (this._id > 0)
                this._sock.emit("register", false, "already logged in");
            else {
                repository_1.default.db.Query(`insert users (gname, password, fname, lname) values ('${gname}','${password}','${fname}','${lname}')`, (res) => {
                    this._sock.emit("register", "error" !== res, "");
                });
            }
        };
        this.onLogin = (name, password) => {
            if (this._id > 0)
                this._sock.emit("login", false, "already logged in");
            else {
                repository_1.default.db.Query(`select id from users where gname = '${name}' and password = '${password}'`, (res) => {
                    if (res.length <= 0)
                        this._sock.emit("login", false, "wrong gamer name or password");
                    else {
                        this._id = res[0].id;
                        this._sock.emit("login", true, this.id);
                        console.log("logged-in", this.id);
                    }
                });
            }
        };
        this.onJoin = () => {
            this._sock.emit("join", repository_1.default.game.onPlayerJoin(this));
        };
        this.onMessage = (code, data) => {
            repository_1.default.game.onPlayerMessage(this, code, data);
        };
        this._sock = sock;
        this._sock.on("disconnect", this.onDisconnect);
        this._sock.on("login", this.onLogin);
        this._sock.on("register", this.onRegister);
        this._sock.on("join", this.onJoin);
        this._sock.on("message", this.onMessage);
        repository_1.default.db.Query(`insert sessions (id) values('${this.session}')`);
    }
    get id() { return this._id; }
    get HP() { return this._hp; }
    set HP(v) { this._hp = v; }
    get session() { return this._sock.id; }
}
exports.Player = Player;
