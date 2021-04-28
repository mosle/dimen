"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Rect_1 = __importDefault(require("./Rect"));
class Path {
    constructor(path) {
        this._pathElement = path;
    }
    static createFromSvgPath(path) {
        const obj = new Path(path);
        return obj;
    }
    get pathElement() {
        return this._pathElement;
    }
    toCss(scale) {
        const expression = this.pathElement.getAttribute("d");
        return `path(${expression})`;
    }
    d() {
        return this.pathElement.getAttribute("d");
    }
    boundingBox() {
        const bbox = this.pathElement.getBBox();
        return new Rect_1.default(bbox.x, bbox.y, bbox.width, bbox.height);
    }
}
exports.default = Path;
