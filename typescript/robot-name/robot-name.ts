const getRandomInt = (min: number, max: number): number => {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);

  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
};

class RobotName {
  public name: string;
  private usedNames: Set<string> = new Set();

  constructor() {
    this.name = this.generateUniqueName();
  }

  generateUniqueName(): string {
    const startCharCode = 'A'.charCodeAt(0);
    const endCharCode = 'Z'.charCodeAt(0);
    const letters = [...Array(2)].map(_ => String.fromCharCode(getRandomInt(startCharCode, endCharCode))).join('');
    const digits = getRandomInt(100, 999);
    const name = `${letters}${digits}`;

    if (!this.usedNames.has(name)) {
      this.usedNames.add(name);

      return name;
    }

    return this.generateUniqueName();
  }

  resetName(): void {
    this.name = this.generateUniqueName();
  }
}

export default RobotName;
