"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dot = void 0;
const mass_1 = require("./mass");
const clock_1 = require("./clock");
const shot_1 = require("./shot");
const pt_1 = require("./pt");
const collision_1 = require("./collision");
const WALL_MASS = 1000.0;
const ZeroVelocity = new pt_1.PT(0, 0);
const FORCE_DENS_FACTOR = 4.0;
const VEL_DENS_FACTOR = 2.0;
const DOT_DOT_COL_FACTOR = 10;
const DOT_DOT_COL_HP = 10;
const DOT_SHOT_COL_FACTOR = 50;
const DOT_SHOT_COL_HP = 20;
const RADIUS = 10.0;
const SIZE = 1000.0;
const COLORS = ["red", "cyan", "blue", "lightblue", "purple", "yellow", "lime", "magenta", "pink", "white", "silver", "orange", "brown", "maroon", "green", "olive", "aquamarine"];
class Dot extends mass_1.Mass {
    constructor() {
        super();
        this.name = "noname";
        this.latency = 0;
        this.time = clock_1.Clock.seconds;
        this.alive = false;
        this.shots = [new shot_1.Shot(), new shot_1.Shot(), new shot_1.Shot()];
        this._hp = 0;
        this.tPos = new pt_1.PT();
        this.tDir = new pt_1.PT();
        this.color = COLORS[clock_1.Clock.RandN(COLORS.length)];
        this.position.set(clock_1.Clock.RandB(RADIUS, SIZE - RADIUS), clock_1.Clock.RandB(RADIUS, SIZE - RADIUS));
    }
    get HP() { return this._hp; }
    set HP(v) { this._hp = v; this.alive = this._hp > 0; }
    fill(data) {
        //console.log(data);
        this.time -= this.latency;
        super.fill(data);
    }
    shoot(pos) {
        //this.time -= this.latency;
        const dir = pos.sub(this.position).unit();
        for (let s of this.shots) {
            if (s.shoot(this.position, dir))
                break;
        }
    }
    collisionTest(dot) {
        if (!this.alive || !dot.alive)
            return false;
        if ((0, collision_1.Sphere2Sphere)(this.position, RADIUS, dot.position, RADIUS)) {
            const dir = dot.position._sub(this.position).unit().mul(DOT_DOT_COL_FACTOR);
            this.force.sub(dir);
            dot.force.add(dir);
            (0, collision_1.CollisionResponse)(this.velocity, this.mass, dot.velocity, dot.mass);
            this.HP -= DOT_DOT_COL_HP;
            dot.HP -= DOT_DOT_COL_HP;
        }
        const s1 = this.shotsTest(dot);
        const s2 = dot.shotsTest(this);
        this.HP -= DOT_SHOT_COL_HP * s1;
        dot.HP -= DOT_SHOT_COL_HP * s2;
        return false;
    }
    boundTest() {
        if (this.position.x < RADIUS || this.position.x > 1000 - RADIUS)
            this.velocity.x *= -1;
        if (this.position.y < RADIUS || this.position.y > 1000 - RADIUS)
            this.velocity.y *= -1;
    }
    shotsTest(dot) {
        let count = 0;
        for (let s of dot.shots) {
            if (!this.shotTest(s))
                continue;
            s.alive = false;
            (0, collision_1.CollisionResponse)(this.velocity, this.mass, s.velocity, s.mass);
            ++count;
        }
        return count;
    }
    shotTest(shot) {
        if (!shot.alive)
            return false;
        this.tDir.copy(shot.velocity).unit().mul(RADIUS);
        this.tPos.copy(shot.position).sub(this.tDir);
        for (let i = 0; i < 3; ++i) {
            if ((0, collision_1.Sphere2Sphere)(this.position, RADIUS, this.tPos, RADIUS * 0.5))
                return true;
            this.tPos.add(this.tDir);
        }
        return false;
    }
    resetTime() { this.time = clock_1.Clock.seconds; }
    simulate(times = 10) {
        const dt = (clock_1.Clock.seconds - this.time) / times;
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
exports.Dot = Dot;
