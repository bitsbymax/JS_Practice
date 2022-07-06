/* ronman триатлон - це одна з серій триатлонових перегонів, на довгі дистанції. 
Вона складається з плавання (3,86 км), їзди на велосипеді (180,25 км) і марафону (42,2 км) 
і це все за 17 годин, без зупинок, без відпочинку. Повір - це боляче і важко. Твоє завдання 
створити функцію getTriathlonDistance, котра прийматиме дистанцію distance, та повертатиме 
одне із значень:

Якщо distance рівне нулю - рядок Starting Line... Good Luck!
Якщо атлет зараз пливе - об'єкт з ключем swim, значенням якого є залишок до кінця дистанції.
Якщо атлет зараз їде на велосипеді - об'єкт з ключем bike, значенням якого є залишок 
до кінця дистанції.
Якщо атлет зараз біжить марафон - об'єкт з ключем run, значенням якого є залишок
до кінця дистанції.
В разі фінішу, повернути рядок You\'re done! Stop running! Дистанції мають бути 
округлені до 2 знаків після коми.

Приклади:

getTriathlonDistance(39) === { bike: '187.31 to go!' }
getTriathlonDistance(2.05) === { swim: '224.26 to go!' }
getTriathlonDistance(200.31) === { run: '26 to go!' }
getTriathlonDistance(0) === 'Starting Line... Good Luck!'
getTriathlonDistance(226.31) === 'You're done! Stop running!' */
debugger;
function getTriathlonDistance(distance) {
  const x = {};
  const allDistance = 3.86 + 180.25 + 42.2;

  if (distance === 0) {
    return 'Starting Line... Good Luck!';
  }

  if (distance >= 226.31) {
    return 'You\'re done! Stop running!';
  }

  if (distance < 3.86 && distance > 0) {
    x.swim = `${+(allDistance - distance).toFixed(2)} to go!`;
    return x;
  } 
  
  if (distance < (3.86 + 180.25)) {
    x.bike = `${+(allDistance - distance).toFixed(2)} to go!`;
    return x;
  }

  if (distance < allDistance && distance >= (3.86 + 180.25)) {
    x.run = `${+(allDistance - distance).toFixed(2)} to go!`;
    return x;
  }
}
console.log(getTriathlonDistance(200.31))