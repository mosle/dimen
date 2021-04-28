import Rect from "./Rect";
export default class Path {
    _pathElement: SVGPathElement;
    constructor(path: SVGPathElement);
    static createFromSvgPath(path: SVGPathElement): Path;
    get pathElement(): SVGPathElement;
    toCss(scale: number): string;
    d(): string | null | undefined;
    boundingBox(): Rect;
}
