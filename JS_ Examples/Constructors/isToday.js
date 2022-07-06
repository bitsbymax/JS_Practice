/* Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

Make sure that your function does not return a false positive by just checking just the day. */
//?-------------------------------------------------------------------

/* function isToday(date) {
  return new Date().toDateString() === date.toDateString();
} */
//?-------------------------------------------------------------------

/* function isToday(date) {
  const d = new Date();
  return (d.getDate() == date.getDate() && d.getFullYear() == date.getFullYear() && d.getMonth() == date.getMonth());
} */
//?-------------------------------------------------------------------

const isToday = date => date.toDateString() === new Date().toDateString();
