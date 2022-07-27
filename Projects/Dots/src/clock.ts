export class Clock {
    public static get currTime(): number { return (new Date()).getTime(); }
    public static get seconds(): number { return this.currTime * 0.001; }
    public static get Rand(): number { return Math.random(); }
    public static RandZ(n: number): number { return this.Rand * n; }
    public static RandN(n: number): number { return Math.floor(this.RandZ(n)); }
    public static RandB(L: number, H: number): number { return L + this.RandZ(H - L); }

}