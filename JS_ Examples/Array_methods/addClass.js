/* const element = {
  className: 'menu open'
}; */

const addClass = (el, classToAdd) => {
  const classes = el.className.split(' ')
    .filter(cls => cls !== '')
    .filter((cls, i, arr) => arr.indexOf(cls) === i); //arr.indexOf(cls) === i) - перевірка на дублі
      // classes = (2) ['menu', 'open']
  if (classes.includes(classToAdd)) {
    return;
  }

  classes.push(classToAdd);

  el.className = classes.join(' ');  //el = {className: 'menu open toggler'}
};
// console.log(addClass(element, 'toggler'));

//?---------------------------------------------------------------------------

/* const element = {
  className: 'menu open'
}; */

const addClass = (el, classToAdd) => {
  const classes = new Set(el.className.split(' '));
  classes.delete(' ');
  classes.add(classToAdd);
  el.className = [...classes].join(' ');
};

// addClass(element, 'disabled');
// console.log(element.className); // 'menu open disabled'

// addClass(element, 'open');
// console.log(element.className); // 'menu open disabled'

// addClass(element, 'me');
// console.log(element.className); // 'menu open disabled me'
