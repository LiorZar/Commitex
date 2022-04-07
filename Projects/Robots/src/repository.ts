import db from "./db";
import { Player } from "./player"

function clamp(val: number, minVal: number, maxVal: number): number {
    return Math.max(+minVal, Math.min(+maxVal, +val));
}

class Repository {
    private currTime: number = (new Date()).getTime();
    private saveTime: number = 0;
    private players: { [name: string]: Player } = {};
    private onTick: () => void;

    constructor() {
        const that = this;
        db.Query("CALL GetPlayers();", (result) => {
            that.Load(result?.[0]);
        });

        this.onTick = this.tick.bind(this);
        setInterval(this.onTick, 16);
    }
    public GetPlayers(): Player[] {
        return Object.values(this.players);
    }

    public NewPlayer(name: string): boolean {
        if (!!this.players[name])
            return false;

        this.players[name] = new Player(name, Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000));

        return true;
    }

    public MovePlayer(name: string, dx: number, dy: number): boolean {
        const player = this.players[name];
        if (!player)
            return false;
        player.x = clamp(player.x + dx * 1, 0, 1000);
        player.y = clamp(player.y + dy * 1, 0, 1000);

        return true;
    }

    public Load(players: any) {
        if (!players) return;
        const len: number = players.length;
        this.players = {};
        for (let i = 0; i < len; ++i) {
            const p = players[i];
            this.players[p.name] = new Player(p.name, p.x, p.y);
        }
    }

    public Save() {
        this.saveTime = this.currTime;

        for (let name in this.players) {
            const p: Player = this.players[name];
            db.Query(`CALL UpdPlayer('${name}', ${p.x}, ${p.y});`, (result) => { });
        }
    }

    private tick() {
        const prevTime = this.currTime;
        this.currTime = (new Date()).getTime();

        if (this.currTime - this.saveTime > 30000) // every 30 seconds
            this.Save();
    }
}

const rep: Repository = new Repository();

export default rep;