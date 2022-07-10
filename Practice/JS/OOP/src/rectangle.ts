/// <reference path="shape.ts" />

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(n: string, w: number, h: number) {
        super(n);

        this.width = w;
        this.height = h;
    }

    draw(): void {

        console.log("i'm drawing rectangle");
    }
}