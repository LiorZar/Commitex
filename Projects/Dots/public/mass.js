class Mass {
	constructor() {
		this.mass = 0.5;
		this.position = new PT();
		this.velocity = new PT();
		this.force = new PT();
	}
	fill(data) {
		this.mass = data.mass;
		this.position.copy(data.position);
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
