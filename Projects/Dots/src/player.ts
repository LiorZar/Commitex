import { Socket } from "socket.io";
import { Game } from "./game";
import repository from "./repository";


export class Player {
    private _id: number = 0;
    private _sock: Socket;
    constructor(sock: Socket) {
        this._sock = sock;
        this._sock.on("disconnect", this.onDisconnect);
        this._sock.on("login", this.onLogin);
        this._sock.on("register", this.onRegister);

        repository.db.Query(`insert sessions (id) values('${this.session}')`);
    }

    public get id(): number { return this._id; }
    public get session(): string { return this._sock.id; }

    public onDisconnect = () => {
        repository.game.onPlayerDisconnect(this);
        repository.db.Query(`update sessions set ctime=GETDATE() where id = '${this.session}'`);
    }
    public onRegister = (gname: string, password: string, fname: string, lname: string) => {
        if (this._id > 0)
            this._sock.emit("register", false, "already logged in");
        else {
            repository.db.Query(`insert users (gname, password, fname, lname) values ('${gname}','${password}','${fname}','${lname}')`, (res) => {
                this._sock.emit("register", "error" !== res, "");
            });
        }
    }
    public onLogin = (name: string, password: string) => {
        if (this._id > 0)
            this._sock.emit("login", false, "already logged in");
        else {
            repository.db.Query(`select id from users where gname = '${name}' and password = '${password}'`, (res: any[]) => {
                if (res.length <= 0)
                    this._sock.emit("login", false, "wrong gamer name or password");
                else {
                    this._id = res[0].id;
                    this._sock.emit("login", true, `userId = ${this.id}`);
                }
            });
        }
    }
}