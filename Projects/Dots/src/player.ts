import { Socket } from "socket.io";
import { Dot } from "./dot";
import repository from "./repository";


export class Player {
    public dot: Dot = new Dot();
    private _id: number = 0;
    public sock: Socket;

    constructor(sock: Socket) {
        this.sock = sock;
        this.sock.on("disconnect", this.onDisconnect);
        this.sock.on("login", this.onLogin);
        this.sock.on("register", this.onRegister);
        this.sock.on("join", () => repository.game.onPlayerJoining(this));
        this.sock.on("joined", (currTime: number) => this.dot.latency = Math.min(0.2, ((new Date()).getTime() - currTime) / 2000.0));
        this.sock.on("latency", () => repository.game.onPlayerLatency(this));
        this.sock.on("message", (code: string, data: any) => repository.game.onPlayerMessage(this, code, data));

        repository.db.Query(`insert sessions (id) values('${this.session}')`);
    }

    public get id(): number { return this._id; }

    public get session(): string { return this.sock.id; }

    public onDisconnect = () => {
        repository.game.onPlayerDisconnect(this);
        repository.db.Query(`update sessions set ctime=GETDATE() where id = '${this.session}'`);
    }

    public onRegister = (gname: string, password: string, fname: string, lname: string) => {
        if (this._id > 0)
            this.sock.emit("register", false, "already logged in");
        else {
            repository.db.Query(`insert users (gname, password, fname, lname) values ('${gname}','${password}','${fname}','${lname}')`, (res) => {
                this.sock.emit("register", "error" !== res, "");
            });
        }
    }

    public onLogin = (name: string, password: string) => {
        if (this._id > 0)
            this.sock.emit("login", false, "already logged in");
        else {
            repository.db.Query(`select id from users where gname = '${name}' and password = '${password}'`, (res: any[]) => {
                if (res.length <= 0)
                    this.sock.emit("login", false, "wrong gamer name or password");
                else {
                    this._id = res[0].id;
                    this.sock.emit("login", true, this.id);
                    console.log("logged-in", this.id);
                    this.dot.name = name;
                }
            });
        }
    }
}