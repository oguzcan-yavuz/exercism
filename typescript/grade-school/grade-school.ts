type Student = string;
type Roster = Map<string, Student[]>;

class GradeSchool {
  constructor(private roster: Roster = new Map()) {}

  studentRoster(): Roster {
    const cloneMap = new Map(this.roster);
    for (const [key, value] of cloneMap.entries()) {
      cloneMap.set(key, [...value]);
    }

    return cloneMap;
  }

  addStudent(name: string, grade: number): void {
    const gradeStr = grade.toString();
    const studentsWithSameGrade = this.roster.get(gradeStr) || [];
    const updatedStudents = [...studentsWithSameGrade, name].sort();
    this.roster.set(gradeStr, updatedStudents);
  }

  studentsInGrade(grade: number): Student[] {
    const gradeStr = grade.toString();

    return [...(this.roster.get(gradeStr) || [])];
  }
}

export default GradeSchool;
