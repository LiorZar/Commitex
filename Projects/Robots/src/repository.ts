import db from "./db";
import { Player } from "./player"

const LIMIT: number = 300;
function clamp(val: number, minVal: number, maxVal: number): number {
    return Math.max(+minVal, Math.min(+maxVal, +val));
}

class Repository {
    private currTime: number = (new Date()).getTime();
    private saveTime: number = 0;
    private killTime: number = 0;
    private players: { [name: string]: Player } = {};
    private onTick: () => void;

    constructor() {
        const that = this;
        db.Query("exec GetPlayers", (result) => {
            console.log(result);
            that.Load(result);
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

        const player = new Player(name, Math.floor(Math.random() * LIMIT), Math.floor(Math.random() * LIMIT));;
        player.alive = this.currTime;
        this.players[name] = player;

        return true;
    }

    public MovePlayer(name: string, dx: number, dy: number): boolean {
        const player = this.players[name];
        if (!player)
            return false;
        player.x = clamp(player.x + dx * 1, 0, LIMIT);
        player.y = clamp(player.y + dy * 1, 0, LIMIT);
        player.alive = this.currTime;

        return true;
    }

    public KillPlayers() {
        this.killTime = this.currTime;
        let removed: string[] = [];
        for (let name in this.players) {
            const p = this.players[name];
            if (this.currTime - p.alive > 30000) {
                db.Query(`exec DelPlayer '${name}'`, (result) => { });
                removed.push(name);
            }
        }

        const len: number = removed.length;
        for (let i = 0; i < len; ++i)
            delete this.players[removed[i]];
    }

    public Load(players: any) {
        if (!players) return;
        const len: number = players.length;
        this.players = {};
        for (let i = 0; i < len; ++i) {
            const p = players[i];
            this.players[p.name] = new Player(p.name, p.x, p.y);
            this.players[p.name].alive = this.currTime;
        }
    }

    public Save() {
        this.saveTime = this.currTime;

        for (let name in this.players) {
            const p: Player = this.players[name];
            db.Query(`exec UpdPlayer '${name}', ${p.x}, ${p.y}`, (result) => { });
        }
    }

    private tick() {
        const prevTime = this.currTime;
        this.currTime = (new Date()).getTime();

        if (this.currTime - this.saveTime > 30000) // every 30 seconds
            this.Save();

        if (this.currTime - this.killTime > 1000) // every 1 seconds
            this.KillPlayers();
    }
}

const rep: Repository = new Repository();

export default rep;