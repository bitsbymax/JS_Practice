/* You will create a function named add. This function will return the sum of all the arguments. Sounds easy, doesn't it??

Well here's the twist. The inputs will gradually increase with their index as parameter to the function.

  add(3,4,5); 

  returns ( 3 * 1 ) + ( 4 * 2 ) + ( 5 * 3 ) = 26

Remember the function will return 0 if no arguments are passed.

Example
  add(); //=> 0
  add(1,2,3); //=> 14
  add(1,4,-5,5); //=> 14 */

/* function add(...arg) {

  if (arguments.length < 1) {
    return 0;
  }
  return arg.map((v, i) => v * (i + 1)).reduce((a, b) => a + b, 0)
}
*/

/* const add = (...args) => args.reduce((s, v, i) => s + v * (i + 1), 0);
*/

function add() {
  for (let n = 0, i = 0; i < arguments.length; i++) {
    n += arguments[i] * (i + 1)
  }
  
  return n
}
