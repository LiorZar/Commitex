/// <reference path="shape.ts" />

class Triangle extends Shape {
    x1: number = 0;
    y1: number = 0;

    x2: number = 0;
    y2: number = 0;

    x3: number = 0;
    y4: number = 0;

    constructor(n: string) {
        super(n);
    }

    draw(): void {

        console.log("i'm drawing Trinalge");
    }
}