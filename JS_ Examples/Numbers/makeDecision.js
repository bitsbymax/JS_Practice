/* Хороший день для пікніка. Друзі вирішили вибратися у ліс та відпочити. Приїхавши вони дізналися,
що у них залишилося дуже мало пального. Є два варіанти:
Зателефонувати знайомим і попросити привезти пального.
Дістатися найближчої заправної станції самостійно.
Знаючи кількість пального, яка залишилася fuelRemaining, відстань у кілометрах до найближчої заправки distance 
та розхід пального на 100км fuelСonsumption ми можемо допомогти людям прийняти рішення за допомогою функції makeDeсision.

Приклади:
makeDeсision(3, 34, 6.5) === 'reach gas station by themselves'
makeDeсision(0, 34, 6.5) === 'ask for help'
makeDeсision(-2, -30, 0) === 'please, enter the valid data.' */


  function makeDecision(fuelRemaining, distance, fuelConsumption) {
    if (fuelConsumption <= 0 || distance <= 0 || fuelRemaining < 0) {
      return 'please, enter the valid data.';
    }
    if ((fuelConsumption / 100) * distance <= fuelRemaining) {
      return 'reach gas station by themselves';
    } else {
      return 'ask for help';
    }
  }