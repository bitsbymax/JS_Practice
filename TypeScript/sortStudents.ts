/* # Sort students
Create and export a `sortStudents` function that takes 3 parameters and return a
new array with students sorted according to the given params. Original array
should not be changed.

The parameters are:
- an initial array of students
- a string representing a type of sort
- a sort order that can be `asc` or `desc`

You also need to add correct types:
- Create `Student` interface matching the next data:
    ```
    {
      name: 'Jessica',
      surname: 'Buxton',
      age: 26,
      married: true,
      grades: [5, 5, 4, 5, 4, 4, 4, 4, 5, 4, 5, 4],
    }
    ```
- Create and export a `SortType` enum, having the next values:
    ```
    Name
    Surname
    Age
    Married
    AverageGrade
    ```
    Hint: `AverageGrade` is sorting by an average value in `grades` array.
- Create `SortOrder` type with only 2 values `'asc'` and `'desc'` 
    Hint: If values are the same the students should go in the original order 
    (no matter we use `asc` or `desc` order)
 */

interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

function getAverageGrade(student: number[]): number {
  return student.reduce((a: number, b: number) => a + b, 0) / student.length;
}

type SortOrder = 'asc' | 'desc';

function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copy.sort(
        (a, b) => {
          return order === 'asc'
            ? a[sortBy].localeCompare(b[sortBy])
            : b[sortBy].localeCompare(a[sortBy]);
        },
      );
      break;

    case SortType.Age:
    case SortType.Married:
      copy.sort(
        (a, b) => {
          return order === 'asc'
            ? Number(a[sortBy]) - Number(b[sortBy])
            : Number(b[sortBy]) - Number(a[sortBy]);
        },
      );
      break;

    case SortType.AverageGrade:
      copy.sort(
        (a, b) => {
          return order === 'asc'
            ? getAverageGrade(a[sortBy]) - getAverageGrade(b[sortBy])
            : getAverageGrade(b[sortBy]) - getAverageGrade(a[sortBy]);
        },
      );
      break;

    default:
      break;
  }

  return copy;
}

/* interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

type SortOrder = 'asc' | 'desc';

function avgGrade({ grades }: Student): number {
  if (grades.length === 0) {
    return 0;
  }

  const sum = grades.reduce((s, a) => s + a, 0);

  return sum / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sign = order === 'desc' ? -1 : 1;

  return [...students].sort((a: Student, b: Student) => {
    switch (sortBy) {
      case SortType.Name:
        return sign * a.name.localeCompare(b.name);

      case SortType.Surname:
        return sign * a.surname.localeCompare(b.surname);

      case SortType.Age:
        return sign * (a.age - b.age);

      case SortType.Married:
        return sign * ((+a.married) - (+b.married));

      case SortType.AverageGrade:
        return sign * (avgGrade(a) - avgGrade(b));

      default:
        return 0;
    }
  });
} */
