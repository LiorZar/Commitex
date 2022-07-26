"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
const game_1 = require("./game");
class Repository {
    constructor() {
        this.db = new db_1.DB();
        this.game = new game_1.Game();
        this.currTime = (new Date()).getTime();
        this.saveTime = 0;
        this.killTime = 0;
        this.onTick = this.tick.bind(this);
        setInterval(this.onTick, 16);
    }
    Init() {
        console.log("Running");
        this.db.Query("delete sessions");
    }
    tick() {
        const prevTime = this.currTime;
        this.currTime = (new Date()).getTime();
    }
}
const rep = new Repository();
exports.default = rep;
