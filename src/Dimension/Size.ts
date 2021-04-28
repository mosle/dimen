import Util from "petit-util";
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
  static sizeOfHTMLElement(element: HTMLElement): Size {
    return new Size(
      Util.dom.computedWidth(element),
      Util.dom.computedHeight(element)
    );
  }
}
