export class Player {
    public name: string = "";
    public x: number = 0;
    public y: number = 0;
    public alive: number = 0;

    constructor(name: string, x: number, y: number) {
        this.name = name;
        this.x = x;
        this.y = y;
    }
}