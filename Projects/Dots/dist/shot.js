"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shot = void 0;
const mass_1 = require("./mass");
const SHOT_MASS = 0.05;
const SHOT_SPEED = 1500;
const SHOT_LENGTH = 1;
const SHOT_LIFETIME = 1.0;
class Shot extends mass_1.Mass {
    constructor() {
        super(SHOT_MASS);
        this.alive = false;
        this.lifetime = 0;
    }
    shoot(position, dir) {
        if (this.alive)
            return false;
        this.alive = true;
        this.lifetime = SHOT_LIFETIME;
        this.position.copy(position);
        this.velocity.copy(dir).mul(SHOT_SPEED);
        return true;
    }
    simulate(dt) {
        if (!this.alive)
            return;
        super.simulate(dt);
        this.lifetime -= dt;
        if (this.lifetime <= 0)
            this.alive = false;
    }
}
exports.Shot = Shot;
