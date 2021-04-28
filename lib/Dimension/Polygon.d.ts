import Position from "./Position";
export default class Polygon {
    positions: Array<Position>;
    constructor();
    add(x: number, y: number): void;
    static createFromSvgPolygon(polygon: SVGPolygonElement): Polygon;
    toCss(scale: number): string;
}
