import Position from "./Position";
export default class Polygon {
  positions: Array<Position> = [];
  constructor() {}
  add(x: number, y: number) {
    const position = new Position(x, y);
    this.positions.push(position);
  }
  static createFromSvgPolygon(polygon: SVGPolygonElement): Polygon {
    const poly = new Polygon();
    Array.from(polygon.points).forEach((p) => {
      poly.add(p.x, p.y);
    });
    return poly;
  }
  toCss(scale: number): string {
    const pair: Array<string> = [];
    this.positions.forEach((p) => {
      const point = p.mult(scale);
      pair.push(`${point.x}px ${point.y}px`);
    });
    return `polygon(${pair.join(",")})`;
  }
}
