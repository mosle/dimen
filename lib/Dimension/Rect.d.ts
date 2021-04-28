import Size from "./Size";
import Position from "./Position";
export default class Rect {
    size: Size;
    position: Position;
    constructor(x: number, y: number, width: number, height: number);
    get width(): number;
    get height(): number;
    get x(): number;
    get y(): number;
    center(): Position;
    static createFromSvgRect(rect: SVGRectElement): Rect;
}
