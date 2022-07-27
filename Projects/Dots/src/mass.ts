import { PT } from "./pt"

export class Mass {
    public mass: number = 0.5;
    public position: PT = new PT();
    public velocity: PT = new PT();
    public force: PT = new PT();
    constructor(mass?: number) {
        this.mass = mass || 0.5;
        this.position = new PT();
        this.velocity = new PT();
        this.force = new PT();
    }
    public fill(data: Mass): void {
        // this.mass = data.mass;
        // this.position.copy(data.position);
        this.velocity.copy(data.velocity);
        this.force.copy(data.force);
    }
    simulate(dt: number): void {
        this.velocity.add(this.force._mul(dt / this.mass));
        this.position.add(this.velocity._mul(dt));
    }
    apply(force: PT): void {
        this.force.add(force);
    }
}
