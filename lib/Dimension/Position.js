"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Position {
    constructor(x, y) {
        this.x = 0;
        this.y = 0;
        this.x = x;
        this.y = y;
    }
    mult(n) {
        return new Position(this.x * n, this.y * n);
    }
}
exports.default = Position;
