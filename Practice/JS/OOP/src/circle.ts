/// <reference path="shape.ts" />

class Circle extends Shape {
    radius: number;

    constructor(n: string, r: number) {
        super(n);
        this.radius = r;
    }

    draw(): void {

        console.log("i'm drawing Circle");
    }
}