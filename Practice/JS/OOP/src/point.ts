class Point {
    x: number;
    y: number;
    constructor(_x: number = 0, _y: number = 0) {
        this.x = _x;
        this.y = _y;
    }

    Clone(): Point {
        let p = new Point();
        p.x = this.x;
        p.y = this.y;
        return p;
    }
}