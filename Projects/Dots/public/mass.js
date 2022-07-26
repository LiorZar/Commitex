class Mass {
	constructor() {
		this.mass = 0.5;
		this.position = new PT();
		this.velocity = new PT();
		this.force = new PT();
	}
	simulate(dt) {
		this.velocity.add(this.force._mul(dt / this.mass));
		this.position.add(this.velocity._mul(dt));
	}
	apply(force) {
		this.force.add(force);
	}
}
