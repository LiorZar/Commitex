import db from "./db";

class Repository {
    private currTime: number = (new Date()).getTime();
    private saveTime: number = 0;
    private killTime: number = 0;
    private onTick: () => void;

    constructor() {
        this.onTick = this.tick.bind(this);
        setInterval(this.onTick, 16);
    }

    private tick() {
        const prevTime = this.currTime;
        this.currTime = (new Date()).getTime();


    }
}

const rep: Repository = new Repository();

export default rep;