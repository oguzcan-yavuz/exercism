type Command = string;

class HandShake {
  private commandList: Command[];
  private binary: string;

  constructor(private decimal: number) {
    const commandList: Command[] = [
      'wink',
      'double blink',
      'close your eyes',
      'jump',
    ];
    const totalCombinations = 2 ** (commandList.length);
    this.binary = (this.decimal & (totalCombinations - 1)).toString(2);
    this.commandList = decimal === 16
      ? commandList.reverse()
      : commandList;
  }

  commands(): Command[] {
    const bits = this.binary.split('').reverse();
    console.log({ bits });

    return this.commandList
      .filter((_, index) => bits[index] === '1');
  }
}

export default HandShake;
