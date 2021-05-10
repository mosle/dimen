"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const petit_util_1 = __importDefault(require("petit-util"));
const Position_1 = __importDefault(require("./Position"));
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
    autoSize(innerSize, cover = false) {
        const frameRatio = this.width / this.height;
        const innerRatio = innerSize.width / innerSize.height;
        const position = new Position_1.default(0, 0);
        let scale = 1;
        if (cover) {
            if (frameRatio > innerRatio) {
                scale = this.width / innerSize.width;
                position.y = -(innerSize.height * scale - this.height) / 2;
            }
            else {
                scale = this.height / innerSize.height;
                position.x = -(innerSize.width * scale - this.width) / 2;
            }
        }
        else {
            if (frameRatio > innerRatio) {
                scale = this.height / innerSize.height;
                position.x = -(innerSize.width * scale - this.width) / 2;
            }
            else {
                scale = this.width / innerSize.width;
                position.y = -(innerSize.height * scale - this.height) / 2;
            }
        }
        return [scale, position];
    }
}
exports.default = Size;
