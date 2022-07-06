/* Усі офіціанти люблять чайові!

Один з них поділився з нами секретним рейтингом в залежності від залишеної суми amount:

terrible - amount в розмірі 0 грн
poor - 0 < amount <= 10 грн
good - 10 < amount <= 20 грн
great - 20 < amount <= 50 грн
excellent - amount > 50 грн
Реалізуй функцію getTipsRating, котра приймає суму чайових amount, та повертає
рядок-оцінку із рейтингу вище: terrible, poor, good, great або excellent */

function getTipsRating(amount) {
  // write your code here
  if (amount === 0) {
    return 'terrible';
  }
  if (amount <= 10) {
    return 'poor';
  }
  if (amount <= 20) {
    return 'good';
  }
  if (amount <= 50) {
    return 'great';
  }
  if (amount > 50) {
    return 'excellent';
  }
}