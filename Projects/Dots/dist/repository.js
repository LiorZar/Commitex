"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
const game_1 = require("./game");
class Repository {
    constructor() {
        this.db = new db_1.DB();
        this.game = new game_1.Game();
        this._io = null;
    }
    Init() {
        console.log("Running");
        this.db.Query("delete sessions");
    }
    get io() { return this._io; }
    set io(s) { this._io = s; }
}
const rep = new Repository();
exports.default = rep;
