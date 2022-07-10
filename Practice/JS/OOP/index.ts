/// <reference path="src/rectangle.ts" />
/// <reference path="src/triangle.ts" />
/// <reference path="src/circle.ts" />
/// <reference path="src/point.ts" />

console.clear();

function onButton(value: string): void {
    console.log(value);
}

let p0 = new Point(5, 3);
let p1 = new Point();
let p2 = p0.Clone();

console.log("x");
