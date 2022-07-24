import { DB } from "./db";
import { Game } from "./game";

class Repository {
    public db: DB = new DB();
    public game: Game = new Game();
    private currTime: number = (new Date()).getTime();
    private saveTime: number = 0;
    private killTime: number = 0;
    private onTick: () => void;

    constructor() {
        this.onTick = this.tick.bind(this);
        setInterval(this.onTick, 16);
    }

    public Init(): void {
        console.log("Running");
        this.db.Query("delete sessions");
    }
    private tick() {
        const prevTime = this.currTime;
        this.currTime = (new Date()).getTime();
    }


}

const rep: Repository = new Repository();

export default rep;