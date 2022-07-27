"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clock = void 0;
class Clock {
    static get currTime() { return (new Date()).getTime(); }
    static get seconds() { return this.currTime * 0.001; }
    static get Rand() { return Math.random(); }
    static RandZ(n) { return this.Rand * n; }
    static RandN(n) { return Math.floor(this.RandZ(n)); }
    static RandB(L, H) { return L + this.RandZ(H - L); }
}
exports.Clock = Clock;
