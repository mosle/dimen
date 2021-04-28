export default class Grid {
  row: number;
  column: number;
  constructor(column: number, row: number) {
    this.column = column;
    this.row = row;
  }
  divideVertical(num: number): Array<number> {
    const r: Array<number> = [];
    for (let i = 0; i < this.row; i++) {
      r.push(Math.floor(num / this.row));
    }
    const mod = num % this.row;
    for (let i = 0; i < mod; i++) {
      r[i]++;
    }
    return r;
  }
}
