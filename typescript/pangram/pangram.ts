class Pangram {
  constructor(public candidate: string) {}

  isPangram(): boolean {
    const start = 'a'.charCodeAt(0);
    const end = 'z'.charCodeAt(0);
    const charCodesInAlphabet = Array.from({ length: (end + 1 - start) }, (_, i) => start + i);
    const candidateCharCodes = this.candidate
      .toLowerCase()
      .split('')
      .map(char => char.charCodeAt(0));

    return charCodesInAlphabet.every(charCodeInAlphabet => candidateCharCodes.includes(charCodeInAlphabet));
  }
}

export default Pangram;
