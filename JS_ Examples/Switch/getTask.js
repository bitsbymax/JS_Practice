/* Іспанський сором... Оце тут наробили справ. Не в службу, а в дружбу, 
допоможи це переписати на switch case, тобі практика, а нам чистий код. */


function getTask(weekday) {
  switch (weekday) {
    case 'monday':
      return 'Write a new module for the program';
    case 'tuesday':
      return 'Test the module and find bugs';
    case 'wednesday':
      return 'Write a new module for the program';
    case 'thursday':
      return 'Test the module and find bugs';
    case 'friday':
      return 'You need to meet the boss today';
    case 'saturday':
      return 'Spend the evening with your friends';
    case 'sunday':
      return 'Go to the movies in the evening';
    default:
      return 'Entered the wrong day of the week';
  }
}