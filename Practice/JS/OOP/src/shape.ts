class Shape {
    name: string;
    color: string = "white";
    constructor(n: string) {
        this.name = n;
        console.log("I'm a shape my name is " + this.name);
    }

    draw(): void {

        console.log("i'm drawing shape");
    }
}
