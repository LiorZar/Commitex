const FORCE_DENS_FACTOR = 2.0;
const VEL_DENS_FACTOR = 2.0;
const RADIUS = 10.0;
const RADIUS_EX = RADIUS + 1.0;
const TEXT_SIZE = 20.0;
const DOT_DOT_COL_FACTOR = 10;
const DOT_DOT_COL_HP = 10;
const DOT_SHOT_COL_FACTOR = 50;
const DOT_SHOT_COL_HP = 20;

class Dot extends Mass {
	constructor(id, color) {
		super();
		this.id = id;
		this.color = color;
		this.latency = 0;
		this.time = Clock.seconds();
		this.name = "????";
		this._hp = 0;
		this.alive = false;
		this.shots = [new Shot(), new Shot(), new Shot()];
		this.tPos = new PT();
		this.tDir = new PT();
		console.log("new Dot", id);
	}
	get HP() {
		return this._hp;
	}
	set HP(v) {
		this._hp = v;
		this.alive = this._hp > 0;
	}

	fill(data) {
		this.time -= this.latency;
		super.fill(data);
		this.HP = data._hp;
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
	collisionTest(dot) {
		if (!this.alive || !dot.alive) return false;

		if (Sphere2Sphere(this.position, RADIUS, dot.position, RADIUS)) {
			const dir = dot.position._sub(this.position).unit().mul(DOT_DOT_COL_FACTOR);
			this.force.sub(dir);
			dot.force.add(dir);
			CollisionResponse(this.velocity, this.mass, dot.velocity, dot.mass);
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
		if (this.position.x < RADIUS || this.position.x > 1000 - RADIUS) this.velocity.x *= -1;
		if (this.position.y < RADIUS || this.position.y > 1000 - RADIUS) this.velocity.y *= -1;
		this.position.x = clamp(this.position.x, RADIUS_EX, 1000 - RADIUS_EX);
		this.position.y = clamp(this.position.y, RADIUS_EX, 1000 - RADIUS_EX);
	}
	hpTest() {
		if (!this.alive) return true;
		if (this.HP > 0) return false;
		this.HP = 0;
		return true;
	}
	shotsTest(dot) {
		let count = 0;
		for (let s of dot.shots) {
			if (!this.shotTest(s)) continue;
			s.alive = false;

			CollisionResponse(this.velocity, this.mass, s.velocity, s.mass);
			++count;
		}
		return count;
	}
	shotTest(shot) {
		if (!shot.alive) return false;
		this.tDir.copy(shot.velocity).unit().mul(RADIUS);
		this.tPos.copy(shot.position).sub(this.tDir);

		for (let i = 0; i < 3; ++i) {
			if (Sphere2Sphere(this.position, RADIUS, this.tPos, RADIUS * 0.5)) return true;
			this.tPos.add(this.tDir);
		}
		return false;
	}
	draw(ctx) {
		if (!this.alive) return;
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
