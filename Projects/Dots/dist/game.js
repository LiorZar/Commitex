"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const clock_1 = require("./clock");
const player_1 = require("./player");
const pt_1 = require("./pt");
const repository_1 = __importDefault(require("./repository"));
const LATENCY_CHECK_TIME = 10000;
class Game {
    constructor() {
        this.inGame = {};
        this.players = {};
        this.currTime = clock_1.Clock.currTime;
        this.latencyTime = 0;
        this.tick = () => {
            this.currTime = clock_1.Clock.currTime;
            this.latency();
            this.simulate();
            this.collisionTest();
            this.hpTest();
            this.broadcastData();
        };
        setInterval(this.tick, 20);
    }
    NewConnection(sock) {
        const player = new player_1.Player(sock);
        this.players[player.session] = player;
    }
    onPlayerDisconnect(player) {
        delete this.inGame[player.id];
        delete this.players[player.session];
        console.log("player deleted", player.session);
    }
    onPlayerJoining(player) {
        const id = player.id;
        const dot = player.dot;
        const d = this.inGame[id];
        if (d || id <= 0) {
            if (d === dot) {
                player.sock.emit("join", -1);
                return;
            }
        }
        this.inGame[id] = dot;
        dot.HP = 100;
        console.log("player joined", player.id);
        player.sock.emit("join", clock_1.Clock.currTime);
    }
    onPlayerJoined(player, currTime) {
        player.dot.latency = Math.min(0.2, (clock_1.Clock.currTime - currTime) / 2000.0);
    }
    onPlayerLatency(player) {
        player.dot.latency = Math.min(0.2, (clock_1.Clock.currTime - this.latencyTime) / 2000.0);
    }
    onPlayerMessage(player, code, data) {
        //console.log("message", code, data);
        if ("me" === code) {
            player.dot.fill(data);
        }
        else if ("shoot" === code) {
            player.dot.shoot(new pt_1.PT(data.x, data.y));
        }
    }
    latency() {
        if (this.currTime - this.latencyTime < LATENCY_CHECK_TIME)
            return;
        this.latencyTime = this.currTime;
        repository_1.default.io.emit("latency");
    }
    simulate() {
        for (let id in this.inGame)
            this.inGame[id].simulate();
    }
    collisionTest() {
        const dots = [];
        for (let id in this.inGame) {
            if (this.inGame[id].alive)
                dots.push(this.inGame[id]);
        }
        const len = dots.length;
        for (let i = 0; i < len; ++i) {
            const d = dots[i];
            for (let j = i + 1; j < len; ++j) {
                dots[j].collisionTest(d);
            }
            d.boundTest();
        }
    }
    hpTest() {
    }
    broadcastData() {
        repository_1.default.io.emit("game", this.inGame);
    }
}
exports.Game = Game;
