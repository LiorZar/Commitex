import { DB } from "./db";
import { Game } from "./game";
import { Server } from "socket.io";

class Repository {
    public db: DB = new DB();
    public game: Game = new Game();
    private _io: Server | null = null;

    constructor() {
    }
    public Init(): void {
        console.log("Running");
        this.db.Query("delete sessions");
    }
    public get io(): Server { return this._io!; }
    public set io(s: Server) { this._io = s; }
}

const rep: Repository = new Repository();

export default rep;