const FORCE_DENS_FACTOR = 2.0;
const VEL_DENS_FACTOR = 2.0;
const RADIUS = 10.0;
const TEXT_SIZE = 20.0;

class Dot extends Mass {
	constructor(id, color) {
		super();
		this.id = id;
		this.color = color;
		this._hp = 100;
		this.latency = 0;
		this.time = Clock.seconds();
		this.name = "????";
		this.shots = [new Shot(), new Shot(), new Shot()];
		this.tPos = new PT();
		this.tDir = new PT();
		console.log("new Dot", id);
	}
	fill(data) {
		this.time -= this.latency;
		super.fill(data);
		this._hp = data._hp;
		this.color = data.color;
		this.name = data.name;
		this.latency = data.latency;
		const len = Math.min(data.shots.length, this.shots.length);
		for (let i = 0; i < len; ++i) this.shots[i].fill(data.shots[i]);
	}
	simulate() {
		const times = 10.0;
		const dt = (Clock.seconds() - this.time) / times;
		for (let i = 0; i < times; ++i) {
			super.simulate(dt);
			this.force.sub(this.force._mul(dt * FORCE_DENS_FACTOR));
			this.velocity.sub(this.velocity._mul(dt * VEL_DENS_FACTOR));
			for (let s of this.shots) s.simulate(dt);
		}
		this.time = Clock.seconds();
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.shadowColor = this.color;
		ctx.shadowBlur = 10;
		ctx.arc(this.position.x, this.position.y, RADIUS, 0, 2 * Math.PI);
		ctx.fill();

		for (let s of this.shots) {
			if (!s.alive) continue;

			ctx.beginPath();
			this.tDir.copy(s.velocity).unit().mul(RADIUS);
			this.tPos.copy(s.position).sub(this.tDir);
			for (let i = 0; i < 3; ++i) {
				ctx.arc(this.tPos.x, this.tPos.y, RADIUS * 0.5, 0, 2 * Math.PI);
				this.tPos.add(this.tDir);
			}
			ctx.fill();
		}

		const str = this.name + this._hp;
		const W = str.length * TEXT_SIZE;
		ctx.fillText(str, this.position.x - W * 0.25, this.position.y - RADIUS * 2);
	}
}
