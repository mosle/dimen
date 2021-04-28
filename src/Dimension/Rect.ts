import Size from "./Size";
import Position from "./Position";
export default class Rect {
  size: Size;
  position: Position;
  constructor(x: number, y: number, width: number, height: number) {
    this.size = new Size(width, height);
    this.position = new Position(x, y);
  }
  get width(): number {
    return this.size.width;
  }
  get height(): number {
    return this.size.height;
  }
  get x(): number {
    return this.position.x;
  }
  get y(): number {
    return this.position.y;
  }
  center(): Position {
    return new Position(this.x + this.width / 2, this.y + this.height / 2);
  }
  static createFromSvgRect(rect: SVGRectElement): Rect {
    return new Rect(
      rect.x.baseVal.value,
      rect.y.baseVal.value,
      rect.width.baseVal.value,
      rect.height.baseVal.value
    );
  }
}
