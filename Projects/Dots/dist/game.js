"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const player_1 = require("./player");
class Game {
    constructor() {
        this.players = {};
        this.inGame = {};
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
    onPlayerJoin(player) {
        const p = this.inGame[player.id];
        if (p || player.id <= 0) {
            if (p === player)
                return false;
        }
        this.inGame[player.id] = player;
        player.HP = 100;
        console.log("player joined", player.id);
        return true;
    }
    onPlayerMessage(player, code, data) {
        delete this.inGame[player.session];
        delete this.players[player.session];
        console.log("player deleted", player.session);
    }
}
exports.Game = Game;
