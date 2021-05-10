import Position from "./Position";
export default class Size {
    width: number;
    height: number;
    constructor(width: number, height: number);
    mult(scale: number): Size;
    static sizeOfHTMLElement(element: HTMLElement): Size;
    autoSize(innerSize: Size, cover?: boolean): [number, Position];
}
