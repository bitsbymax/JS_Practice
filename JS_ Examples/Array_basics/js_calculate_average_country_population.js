/* Given an array of countries with their population. Calculate average population of 
the countries.
[
  { name: 'Ukraine', population: 42000000},
  { name: 'Belarus', population: 9500000},
  { name: 'Moldova', population: 3500000},
  { name: 'Switzerland', population: 8400000},
]
Total population = 42M + 9.5M + 3.5M + 8.4M = 63.4M Average = 63.4M / 4 */

function calculateAverageCountryPopulation(countries) {

  if (countries.length == 0) {
    return 0;
  }
  let amount = 0;
  for (let i = 0; i < countries.length; i++) {
    const x = countries[i].population;
    amount += x;
  }
  return amount / countries.length;
}
