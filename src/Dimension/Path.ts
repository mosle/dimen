import Rect from "./Rect";
export default class Path {
  _pathElement: SVGPathElement;
  constructor(path: SVGPathElement) {
    this._pathElement = path;
  }
  static createFromSvgPath(path: SVGPathElement): Path {
    const obj = new Path(path);
    return obj;
  }
  get pathElement(): SVGPathElement {
    return this._pathElement!;
  }
  toCss(scale: number): string {
    const expression = this.pathElement.getAttribute("d");
    return `path(${expression})`;
  }
  d(): string | null | undefined {
    return this.pathElement.getAttribute("d");
  }
  boundingBox(): Rect {
    const bbox = this.pathElement.getBBox();
    return new Rect(bbox.x, bbox.y, bbox.width, bbox.height);
  }
}
