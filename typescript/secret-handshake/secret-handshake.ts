type Command = string;

class HandShake {
  private commandList: Command[] = [
    'wink',
    'double blink',
    'close your eyes',
    'jump',
  ];
  private binary: string;
  private totalCombinations = 2 ** this.commandList.length;

  constructor(private decimal: number) {
    this.binary = (this.decimal % this.totalCombinations)
      .toString(2)
      .split('')
      .reverse()
      .join('');
  }

  commands(): Command[] {
    const bits = this.binary.split('');
    const commands: Command[] = this.commandList.filter((_, index) => bits[index] === '1');

    return this.decimal >= this.totalCombinations ? commands.reverse() : commands;
  }
}

export default HandShake;
