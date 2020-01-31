export class ResistorColor {
  private colors: string[];
  private colorNumberMap: Map<string, number> = new Map<string, number>([
    ['black', 0],
    ['brown', 1],
    ['red', 2],
    ['orange', 3],
    ['yellow', 4],
    ['green', 5],
    ['blue', 6],
    ['violet', 7],
    ['grey', 8],
    ['white', 9],
  ]);

  constructor(colors: string[]) {
    if (colors.length < 2) {
      throw new Error('At least two colors need to be present');
    }

    this.colors = colors;
  }

  value = (): number => {
    const resistorColor = this.colors
      .slice(0, 2)
      .map(color => this.colorNumberMap.get(color))
      .join('');

    return parseInt(resistorColor, 10);
  };
}
