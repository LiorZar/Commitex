"use strict";
class Shape {
    constructor(n) {
        this.color = "white";
        this.name = n;
        console.log("I'm a shape my name is " + this.name);
    }
    draw() {
        console.log("i'm drawing shape");
    }
}
/// <reference path="shape.ts" />
class Rectangle extends Shape {
    constructor(n, w, h) {
        super(n);
        this.width = w;
        this.height = h;
    }
    draw() {
        console.log("i'm drawing rectangle");
    }
}
/// <reference path="shape.ts" />
class Triangle extends Shape {
    constructor(n) {
        super(n);
        this.x1 = 0;
        this.y1 = 0;
        this.x2 = 0;
        this.y2 = 0;
        this.x3 = 0;
        this.y4 = 0;
    }
    draw() {
        console.log("i'm drawing Trinalge");
    }
}
/// <reference path="shape.ts" />
class Circle extends Shape {
    constructor(n, r) {
        super(n);
        this.radius = r;
    }
    draw() {
        console.log("i'm drawing Circle");
    }
}
class Point {
    constructor(_x = 0, _y = 0) {
        this.x = _x;
        this.y = _y;
    }
    Clone() {
        let p = new Point();
        p.x = this.x;
        p.y = this.y;
        return p;
    }
}
/// <reference path="src/rectangle.ts" />
/// <reference path="src/triangle.ts" />
/// <reference path="src/circle.ts" />
/// <reference path="src/point.ts" />
console.clear();
function onButton(value) {
    console.log(value);
}
let p0 = new Point(5, 3);
let p1 = new Point();
let p2 = p0.Clone();
console.log("x");
//# sourceMappingURL=index.js.map