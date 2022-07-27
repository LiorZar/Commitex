"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mass = void 0;
const pt_1 = require("./pt");
class Mass {
    constructor(mass) {
        this.mass = 0.5;
        this.position = new pt_1.PT();
        this.velocity = new pt_1.PT();
        this.force = new pt_1.PT();
        this.mass = mass || 0.5;
        this.position = new pt_1.PT();
        this.velocity = new pt_1.PT();
        this.force = new pt_1.PT();
    }
    fill(data) {
        // this.mass = data.mass;
        // this.position.copy(data.position);
        this.velocity.copy(data.velocity);
        this.force.copy(data.force);
    }
    simulate(dt) {
        this.velocity.add(this.force._mul(dt / this.mass));
        this.position.add(this.velocity._mul(dt));
    }
    apply(force) {
        this.force.add(force);
    }
}
exports.Mass = Mass;
