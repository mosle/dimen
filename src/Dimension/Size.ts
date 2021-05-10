import Util from "petit-util";
import Position from "./Position";
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
  autoSize(innerSize: Size, cover = false): [number, Position] {
    const frameRatio = this.width / this.height;
    const innerRatio = innerSize.width / innerSize.height;
    const position = new Position(0, 0);
    let scale: number = 1;
    if (cover) {
      if (frameRatio > innerRatio) {
        scale = this.width / innerSize.width;
        position.y = -(innerSize.height * scale - this.height) / 2;
      } else {
        scale = this.height / innerSize.height;
        position.x = -(innerSize.width * scale - this.width) / 2;
      }
    } else {
      if (frameRatio > innerRatio) {
        scale = this.height / innerSize.height;
        position.x = -(innerSize.width * scale - this.width) / 2;
      } else {
        scale = this.width / innerSize.width;
        position.y = -(innerSize.height * scale - this.height) / 2;
      }
    }
    return [scale, position];
  }
}
