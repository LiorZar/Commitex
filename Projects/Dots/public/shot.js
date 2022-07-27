const SHOT_MASS = 0.05;

class Shot extends Mass {
	constructor() {
		super(SHOT_MASS);
		this.alive = false;
		this.lifetime = 0;
	}
	fill(data) {
		super.fill(data);
		this.alive = data.alive;
		this.lifetime = data.lifetime;
	}
	simulate(dt) {
		if (!this.alive) return;
		super.simulate(dt);
		this.lifetime -= dt;
		if (this.lifetime <= 0) this.alive = false;
	}
}
