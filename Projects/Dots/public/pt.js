class PT {
	constructor(x, y) {
		this.x = x || 0;
		this.y = y || 0;
	}
	clone() {
		return new PT(this.x, this.y);
	}
	set(x, y) {
		this.x = x;
		this.y = y;
	}
	add(pt) {
		this.x += pt.x;
		this.y += pt.y;
		return this;
	}
	sub(pt) {
		this.x -= pt.x;
		this.y -= pt.y;
		return this;
	}
	mul(scalar) {
		this.x *= scalar;
		this.y *= scalar;
		return this;
	}
	div(scalar) {
		this.x /= scalar;
		this.y /= scalar;
		return this;
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
	sqr() {
		return this.x * this.x + this.y * this.y;
	}
	length() {
		return Math.sqrt(this.sqr());
	}
}
