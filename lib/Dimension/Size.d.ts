export default class Size {
    width: number;
    height: number;
    constructor(width: number, height: number);
    mult(scale: number): Size;
    static sizeOfHTMLElement(element: HTMLElement): Size;
}
