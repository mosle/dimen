export default class Position {
  x: number = 0;
  y: number = 0;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  mult(n: number) {
    return new Position(this.x * n, this.y * n);
  }
}
