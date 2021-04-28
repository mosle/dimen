export default class Size {
  width: number = 0;
  height: number = 0;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  mult(scale: number) {
    return new Size(this.width * scale, this.height * scale);
  }
}
