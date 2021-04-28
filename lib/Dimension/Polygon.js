"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Position_1 = __importDefault(require("./Position"));
class Polygon {
    constructor() {
        this.positions = [];
    }
    add(x, y) {
        const position = new Position_1.default(x, y);
        this.positions.push(position);
    }
    static createFromSvgPolygon(polygon) {
        const poly = new Polygon();
        Array.from(polygon.points).forEach((p) => {
            poly.add(p.x, p.y);
        });
        return poly;
    }
    toCss(scale) {
        const pair = [];
        this.positions.forEach((p) => {
            const point = p.mult(scale);
            pair.push(`${point.x}px ${point.y}px`);
        });
        return `polygon(${pair.join(",")})`;
    }
}
exports.default = Polygon;
