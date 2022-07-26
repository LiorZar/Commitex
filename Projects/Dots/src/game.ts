import { Socket } from "socket.io";
import { Player } from "./player";
import repository from "./repository";

export class Game {
    private players: { [session: string]: Player } = {};
    private inGame: { [id: string]: Player } = {};
    constructor() {

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

    public onPlayerJoin(player: Player): boolean {
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

    public onPlayerMessage(player: Player, code: string, data: any): void {
        delete this.inGame[player.session];
        delete this.players[player.session];
        console.log("player deleted", player.session);
    }
}

