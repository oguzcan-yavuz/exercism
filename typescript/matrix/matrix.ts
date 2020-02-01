class Matrix {
  public rows: number[][];
  public columns: number[][];

  constructor(public matrix: string) {
    const rows = matrix.split('\n');
    this.rows = rows.map(row => row.split(' ').map(n => parseInt(n, 10)));
    this.columns = rows[0].split(' ').map((_, i) => rows.map((_, j) => parseInt(rows[j].split(' ')[i], 10)));
  }
}

export default Matrix;
