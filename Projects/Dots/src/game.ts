import { Socket } from "socket.io";
import { Player } from "./player";
import repository from "./repository";

export class Game {
    private players: { [id: string]: Player } = {};
    private inGame: { [id: string]: Player } = {};
    constructor() {

    }

    public NewConnection(sock: Socket): void {
        const player = new Player(sock);
        this.players[player.session] = player;
    }

    public onPlayerDisconnect(player: Player): void {
        delete this.inGame[player.session];
        delete this.players[player.session];
        console.log("player deleted", player.session);
    }
}