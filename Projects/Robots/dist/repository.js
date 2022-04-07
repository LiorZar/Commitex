"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("./db"));
const player_1 = require("./player");
function clamp(val, minVal, maxVal) {
    return Math.max(+minVal, Math.min(+maxVal, +val));
}
class Repository {
    constructor() {
        this.currTime = (new Date()).getTime();
        this.saveTime = 0;
        this.killTime = 0;
        this.players = {};
        const that = this;
        db_1.default.Query("exec GetPlayers", (result) => {
            console.log(result);
            that.Load(result);
        });
        this.onTick = this.tick.bind(this);
        setInterval(this.onTick, 16);
    }
    GetPlayers() {
        return Object.values(this.players);
    }
    NewPlayer(name) {
        if (!!this.players[name])
            return false;
        const player = new player_1.Player(name, Math.floor(Math.random() * 900), Math.floor(Math.random() * 900));
        ;
        player.alive = this.currTime;
        this.players[name] = player;
        return true;
    }
    MovePlayer(name, dx, dy) {
        const player = this.players[name];
        if (!player)
            return false;
        player.x = clamp(player.x + dx * 1, 0, 1000);
        player.y = clamp(player.y + dy * 1, 0, 1000);
        player.alive = this.currTime;
        return true;
    }
    KillPlayers() {
        this.killTime = this.currTime;
        let removed = [];
        for (let name in this.players) {
            const p = this.players[name];
            if (this.currTime - p.alive > 10000) {
                db_1.default.Query(`exec DelPlayer '${name}'`, (result) => { });
                removed.push(name);
            }
        }
        const len = removed.length;
        for (let i = 0; i < len; ++i)
            delete this.players[removed[i]];
    }
    Load(players) {
        if (!players)
            return;
        const len = players.length;
        this.players = {};
        for (let i = 0; i < len; ++i) {
            const p = players[i];
            this.players[p.name] = new player_1.Player(p.name, p.x, p.y);
            this.players[p.name].alive = this.currTime;
        }
    }
    Save() {
        this.saveTime = this.currTime;
        for (let name in this.players) {
            const p = this.players[name];
            db_1.default.Query(`exec UpdPlayer '${name}', ${p.x}, ${p.y}`, (result) => { });
        }
    }
    tick() {
        const prevTime = this.currTime;
        this.currTime = (new Date()).getTime();
        if (this.currTime - this.saveTime > 30000) // every 30 seconds
            this.Save();
        if (this.currTime - this.killTime > 1000) // every 1 seconds
            this.KillPlayers();
    }
}
const rep = new Repository();
exports.default = rep;
