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
        this.players = {};
        const that = this;
        db_1.default.Query("CALL GetPlayers();", (result) => {
            that.Load(result === null || result === void 0 ? void 0 : result[0]);
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
        this.players[name] = new player_1.Player(name, Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000));
        return true;
    }
    MovePlayer(name, dx, dy) {
        const player = this.players[name];
        if (!player)
            return false;
        player.x = clamp(player.x + dx * 1, 0, 1000);
        player.y = clamp(player.y + dy * 1, 0, 1000);
        return true;
    }
    Load(players) {
        if (!players)
            return;
        const len = players.length;
        this.players = {};
        for (let i = 0; i < len; ++i) {
            const p = players[i];
            this.players[p.name] = new player_1.Player(p.name, p.x, p.y);
        }
    }
    Save() {
        this.saveTime = this.currTime;
        for (let name in this.players) {
            const p = this.players[name];
            db_1.default.Query(`CALL UpdPlayer('${name}', ${p.x}, ${p.y});`, (result) => { });
        }
    }
    tick() {
        const prevTime = this.currTime;
        this.currTime = (new Date()).getTime();
        if (this.currTime - this.saveTime > 30000) // every 30 seconds
            this.Save();
    }
}
const rep = new Repository();
exports.default = rep;
