"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Size_1 = __importDefault(require("./Size"));
const Position_1 = __importDefault(require("./Position"));
class Rect {
    constructor(x, y, width, height) {
        this.size = new Size_1.default(width, height);
        this.position = new Position_1.default(x, y);
    }
    get width() {
        return this.size.width;
    }
    get height() {
        return this.size.height;
    }
    get x() {
        return this.position.x;
    }
    get y() {
        return this.position.y;
    }
    center() {
        return new Position_1.default(this.x + this.width / 2, this.y + this.height / 2);
    }
    static createFromSvgRect(rect) {
        return new Rect(rect.x.baseVal.value, rect.y.baseVal.value, rect.width.baseVal.value, rect.height.baseVal.value);
    }
}
exports.default = Rect;
