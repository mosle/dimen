"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const petit_util_1 = __importDefault(require("petit-util"));
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
    static sizeOfHTMLElement(element) {
        return new Size(petit_util_1.default.dom.computedWidth(element), petit_util_1.default.dom.computedHeight(element));
    }
}
exports.default = Size;
