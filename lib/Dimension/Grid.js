"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Grid {
    constructor(column, row) {
        this.column = column;
        this.row = row;
    }
    divideVertical(num) {
        const r = [];
        for (let i = 0; i < this.row; i++) {
            r.push(Math.floor(num / this.row));
        }
        const mod = num % this.row;
        for (let i = 0; i < mod; i++) {
            r[i]++;
        }
        return r;
    }
}
exports.default = Grid;
