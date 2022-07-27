export class PT {
    public x: number;
    public y: number;
    constructor(x?: number, y?: number) {
        this.x = x || 0;
        this.y = y || 0;
    }
    public clone(): PT {
        return new PT(this.x, this.y);
    }
    public copy(pt: PT): PT {
        this.x = pt.x;
        this.y = pt.y;
        return this;
    }
    public set(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    public add(pt: PT): PT {
        this.x += pt.x;
        this.y += pt.y;
        return this.__fix();
    }
    public sub(pt: PT): PT {
        this.x -= pt.x;
        this.y -= pt.y;
        return this.__fix();
    }
    public mul(scalar: number): PT {
        this.x *= scalar;
        this.y *= scalar;
        return this.__fix();
    }
    public div(scalar: number): PT {
        this.x /= scalar;
        this.y /= scalar;
        return this.__fix();
    }
    public unit(): PT {
        return this.div(this.length);
    }
    public _add(pt: PT): PT {
        return this.clone().add(pt);
    }
    public _sub(pt: PT): PT {
        return this.clone().sub(pt);
    }
    public _mul(scalar: number): PT {
        return this.clone().mul(scalar);
    }
    public _div(scalar: number): PT {
        return this.clone().div(scalar);
    }
    public dot(pt: PT): number {
        return this.x * pt.x + this.y * pt.y;
    }
    public get sqr(): number {
        return this.x * this.x + this.y * this.y;
    }
    public get length(): number {
        return Math.sqrt(this.sqr);
    }
    private __fix(): PT {
        if (Math.abs(this.x) < 0.0001) this.x = 0;
        if (Math.abs(this.y) < 0.0001) this.y = 0;
        return this;
    }
}
