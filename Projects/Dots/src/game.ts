import { Socket } from "socket.io";
import { Clock } from "./clock";
import { Dot } from "./dot";
import { Player } from "./player";
import { PT } from "./pt";
import repository from "./repository";

const LATENCY_CHECK_TIME = 10000;

export class Game {
    private inGame: { [id: string]: Dot } = {};
    private players: { [session: string]: Player } = {};
    private currTime: number = Clock.currTime;
    public latencyTime: number = 0;

    constructor() {
        setInterval(this.tick, 20);

    }
    public NewConnection(sock: Socket): void {
        const player = new Player(sock);
        this.players[player.session] = player;
    }
    public onPlayerDisconnect(player: Player): void {
        delete this.inGame[player.id];
        delete this.players[player.session];
        console.log("player deleted", player.session);
    }
    public onPlayerJoining(player: Player): void {
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
        player.sock.emit("join", Clock.currTime);
    }
    public onPlayerJoined(player: Player, currTime: number): void {
        player.dot.latency = Math.min(0.2, (Clock.currTime - currTime) / 2000.0);
    }
    public onPlayerLatency(player: Player): void {
        player.dot.latency = Math.min(0.2, (Clock.currTime - this.latencyTime) / 2000.0);
    }
    public onPlayerMessage(player: Player, code: string, data: any): void {
        if ("me" === code) {
            player.dot.fill(data as Dot);
        }
        else if ("shoot" === code) {
            player.dot.shoot(new PT(data.x, data.y));
        }
    }

    private tick = () => {
        this.currTime = Clock.currTime;

        this.latency();
        this.simulate();
        this.collisionTest();
        this.broadcastData();
    }
    private latency() {
        if (this.currTime - this.latencyTime < LATENCY_CHECK_TIME)
            return;
        this.latencyTime = this.currTime;
        repository.io.emit("latency");
    }
    private simulate(): void {
        for (let id in this.inGame)
            this.inGame[id].simulate();
    }
    private collisionTest(): void {
        const ids: any[] = Object.keys(this.inGame);
        const dots: Dot[] = Object.values(this.inGame);

        const len = dots.length;
        for (let i = 0; i < len; ++i) {
            const d = dots[i];
            for (let j = i + 1; j < len; ++j) {
                dots[j].collisionTest(d);
            }
            d.boundTest();
            if (d.hpTest())
                delete this.inGame[ids[i]];
        }
    }

    private broadcastData(): void {
        repository.io.emit("game", this.inGame);
    }

}

