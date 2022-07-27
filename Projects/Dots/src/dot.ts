import { Mass } from "./mass"
import { Clock } from "./clock";
import { Shot } from "./shot";
import { PT } from "./pt";
import { CollisionResponse, Sphere2Sphere } from "./collision";

const WALL_MASS = 1000.0;
const ZeroVelocity = new PT(0, 0);
const FORCE_DENS_FACTOR = 4.0;
const VEL_DENS_FACTOR = 2.0;
const DOT_DOT_COL_FACTOR = 10;
const DOT_DOT_COL_HP = 10;
const DOT_SHOT_COL_FACTOR = 50;
const DOT_SHOT_COL_HP = 20;

const RADIUS = 10.0;
const SIZE = 1000.0;
const COLORS = ["red", "cyan", "blue", "lightblue", "purple", "yellow", "lime", "magenta", "pink", "white", "silver", "orange", "brown", "maroon", "green", "olive", "aquamarine"];

export class Dot extends Mass {
    public name: string = "noname";
    public color: string;
    public latency: number = 0;
    public time: number = Clock.seconds;
    public alive: boolean = false;
    public shots: Shot[] = [new Shot(), new Shot(), new Shot()];
    private _hp: number = 0;

    constructor() {
        super();
        this.color = COLORS[Clock.RandN(COLORS.length)];
        this.position.set(Clock.RandB(RADIUS, SIZE - RADIUS), Clock.RandB(RADIUS, SIZE - RADIUS));
    }
    public get HP(): number { return this._hp; }
    public set HP(v: number) { this._hp = v; this.alive = this._hp > 0; }

    public fill(data: Dot): void {
        //console.log(data);
        this.time -= this.latency;
        super.fill(data);

    }
    public shoot(pos: PT): void {
        //this.time -= this.latency;
        const dir = pos.sub(this.position).unit();
        for (let s of this.shots) {
            if (s.shoot(this.position, dir))
                break;
        }
    }
    public collisionTest(dot: Dot): boolean {
        if (!this.alive || !dot.alive)
            return false;

        if (Sphere2Sphere(this.position, RADIUS, dot.position, RADIUS)) {
            const dir = dot.position._sub(this.position).unit().mul(DOT_DOT_COL_FACTOR);
            this.force.sub(dir);
            dot.force.add(dir);
            CollisionResponse(this.velocity, this.mass, dot.velocity, dot.mass);
            this.HP -= DOT_DOT_COL_HP;
            dot.HP -= DOT_DOT_COL_HP;
        }
        const s1 = this.shotsTest(dot);
        const s2 = dot.shotsTest(this);
        this.HP -= DOT_SHOT_COL_HP * s1;
        dot.HP -= DOT_SHOT_COL_HP * s2;
        return false;
    }
    public boundTest(): void {
        if (this.position.x < RADIUS || this.position.x > 1000 - RADIUS)
            this.velocity.x *= -1;
        if (this.position.y < RADIUS || this.position.y > 1000 - RADIUS)
            this.velocity.y *= -1;
    }
    protected shotsTest(dot: Dot): number {
        let count = 0;
        for (let s of dot.shots) {
            if (!this.shotTest(s)) continue;
            s.alive = false;

            CollisionResponse(this.velocity, this.mass, s.velocity, s.mass);
            ++count;
        }
        return count;
    }
    private tPos: PT = new PT();
    private tDir: PT = new PT();
    protected shotTest(shot: Shot): boolean {
        if (!shot.alive) return false;
        this.tDir.copy(shot.velocity).unit().mul(RADIUS);
        this.tPos.copy(shot.position).sub(this.tDir);

        for (let i = 0; i < 3; ++i) {
            if (Sphere2Sphere(this.position, RADIUS, this.tPos, RADIUS * 0.5)) return true;
            this.tPos.add(this.tDir);
        }
        return false;
    }
    public resetTime() { this.time = Clock.seconds; }
    public simulate(times: number = 10): void {
        const dt = (Clock.seconds - this.time) / times;
        for (let i = 0; i < times; ++i) {
            super.simulate(dt);
            this.force.sub(this.force._mul(dt * FORCE_DENS_FACTOR));
            this.velocity.sub(this.velocity._mul(dt * VEL_DENS_FACTOR));

            for (let s of this.shots)
                s.simulate(dt);
        }
        this.resetTime();
    }
}
