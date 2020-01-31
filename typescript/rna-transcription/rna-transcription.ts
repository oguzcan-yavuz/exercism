class Transcriptor {
  private DNANucleotides = ['G', 'C', 'T', 'A'];
  private dnaToRnaMap: Map<string, string> = new Map<string, string>([
    ['G', 'C'],
    ['C', 'G'],
    ['T', 'A'],
    ['A', 'U'],
  ]);

  toRna(dna: string): string {
    const nucleotides = dna.split('');

    if (!nucleotides.every(n => this.DNANucleotides.includes(n))) {
      throw new Error('Invalid input DNA.');
    }

    return nucleotides.map(nucleotide => this.dnaToRnaMap.get(nucleotide)).join('');
  }

}

export default Transcriptor
