class PT {
	constructor(x, y) {
		this.x = x || 0;
		this.y = y || 0;
	}
	clone() {
		return new PT(this.x, this.y);
	}
	copy(pt) {
		this.x = pt.x;
		this.y = pt.y;
		return this;
	}
	set(x, y) {
		this.x = x;
		this.y = y;
	}
	add(pt) {
		this.x += pt.x;
		this.y += pt.y;
		return this.__fix();
	}
	sub(pt) {
		this.x -= pt.x;
		this.y -= pt.y;
		return this.__fix();
	}
	mul(scalar) {
		this.x *= scalar;
		this.y *= scalar;
		return this.__fix();
	}
	div(scalar) {
		this.x /= scalar;
		this.y /= scalar;
		return this.__fix();
	}
	unit() {
		return this.div(this.length);
	}
	_add(pt) {
		return this.clone().add(pt);
	}
	_sub(pt) {
		return this.clone().sub(pt);
	}
	_mul(scalar) {
		return this.clone().mul(scalar);
	}
	_div(scalar) {
		return this.clone().div(scalar);
	}
	dot(pt) {
		return this.x * pt.x + this.y * pt.y;
	}
	get sqr() {
		return this.x * this.x + this.y * this.y;
	}
	get length() {
		return Math.sqrt(this.sqr);
	}
	__fix() {
		if (Math.abs(this.x) < 0.0001) this.x = 0;
		if (Math.abs(this.y) < 0.0001) this.y = 0;
		return this;
	}
}
