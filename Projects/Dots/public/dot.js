const FORCE_DENS_FACTOR = 2.0;
const VEL_DENS_FACTOR = 2.0;
const RADIUS = 10.0;

class Dot extends Mass {
	constructor(id, color) {
		super();
		this.id = id;
		this.color = color;
		console.log("new Dot", id);
	}

	simulate(dt) {
		const D = 1;
		dt /= D;
		for (let i = 0; i < D; ++i) {
			super.simulate(dt);
			this.force.sub(this.force._mul(dt * FORCE_DENS_FACTOR));
			this.velocity.sub(this.velocity._mul(dt * VEL_DENS_FACTOR));
		}
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.shadowColor = this.color;
		ctx.shadowBlur = 10;

		ctx.arc(this.position.x, this.position.y, RADIUS, 0, 2 * Math.PI);
		ctx.fill();
	}
}
