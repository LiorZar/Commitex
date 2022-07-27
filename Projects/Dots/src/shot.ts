import { Mass } from "./mass"
import { Clock } from "./clock";
import { PT } from "./pt";
const SHOT_MASS = 0.05
const SHOT_SPEED = 1500;
const SHOT_LENGTH = 1;
const SHOT_LIFETIME = 1.0

export class Shot extends Mass {
    public alive: boolean = false;
    public lifetime: number = 0;
    constructor() {
        super(SHOT_MASS);
    }
    public shoot(position: PT, dir: PT): boolean {
        if (this.alive)
            return false;

        this.alive = true;
        this.lifetime = SHOT_LIFETIME;
        this.position.copy(position);
        this.velocity.copy(dir).mul(SHOT_SPEED);
        return true;
    }
    public simulate(dt: number): void {
        if (!this.alive)
            return;
        super.simulate(dt);
        this.lifetime -= dt;
        if (this.lifetime <= 0)
            this.alive = false;
    }
}
