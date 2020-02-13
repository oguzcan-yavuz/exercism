export default class BinarySearch {
  public array: number[] | undefined;

  constructor(arr: number[]) {
    this.array = this.isSorted(arr) ? arr : undefined;
  }

  isSorted(arr: number[]): boolean {
    return arr.every((v, i) => (i === 0 || v >= arr[i - 1]));
  }

  indexOf(value: number): number {
    // TODO: implement
    return value;
  }
}
