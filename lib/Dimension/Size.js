"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Size {
    constructor(width, height) {
        this.width = 0;
        this.height = 0;
        this.width = width;
        this.height = height;
    }
    mult(scale) {
        return new Size(this.width * scale, this.height * scale);
    }
}
exports.default = Size;
