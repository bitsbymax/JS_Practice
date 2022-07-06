/* const group = [
  { name: 'A', marks: [2, 3, 5, 4] },
  { name: 'B', marks: [5, 3, 5, 4] },
  { name: 'C', marks: [5, 5, 5, 5] },
  { name: 'D', marks: [2, 3, 5, 4] },
  { name: 'E', marks: [2, 3, 5, 4] },
]; */

function hasExcellentStudent(studetns) {
  for (const student of studetns) {
    let isExcellent = true;

    for (const mark of student.marks) {
      if (mark !== 5) {
        isExcellent = false;
        break;
      }
    }

    if (isExcellent) {
      return true;
    }
  }

  return false;
}
//?---------------------------------------------------------------------------

function hasExcellentStudent(students) {
  return students.some(
    student => student.marks.every(mark => mark === 5)
  );
}

//?---------------------------------------------------------------------------

function hasExcellentStudent(students) {
  return students
    .map(
      (student, i) => student.marks.every(mark => mark === 5) ? i : false
    )
    .filter(x => x !== false) 
} // [2]


//?---------------------------------------------------------------------------

function hasExcellentStudent(students) {
  return students
    .map((student, i) => isExcellent(student) ? i : false)
    .filter(x => x !== false)
} // [2]

function isExcellent(student) {
  return student.marks.every(mark => mark === 5);
}
