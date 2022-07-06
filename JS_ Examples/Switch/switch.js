let age = 13;
let msg = (age >= 18) ? ('Adult')
  : (age >= 7 && age < 18) ? ('Child')
  : ('Baby');
console.log(msg);

if (age >= 18) {
  msg = 'Adult';
} else if (age >= 7 && age < 18) {
  msg = 'Child';
} else {
  msg = 'Baby';
}
