[] == []; //false
//both are references to two different locations in memory, hence the result is false.

[] == ![]; //true
/* We're trying to compare an object with a boolean value and JavaScript will implicitly convert the operands to Number type. Number([]) is 0 and Number(false) is also 0, which evaluates to true since zero is equal to zero. */

[] + []; //''
/* the addition operator either performs string concatenation or numeric addition. Hence, the + is not defined for arrays and JavaScript will implicitly convert arrays into their string equivalent and concatenate them. The above expression will become similar to: [].toString() + [].toString()
Concatenate of two empty strings yields another empty string and hence the above statement is valid.*/

[] - []; //0
/* This case is similar to the previous one. The - operator is not defined for arrays or strings. Hence, JavaScript will implicitly convert the arrays into their corresponding number type.
Zero minus zero is obviously zero, which makes sense. */

[null, undefined, []] == ",,"; //0
/* This is quite weird. When we try to compare a non-empty array with a string, Javascript coerces each array element into a string and then joins them by commas. Stringification of null, undefined & [] gives an empty string. Hence, the expression [null, undefined, []].toString() yields ",,". */

+[]; //0

[] + {}; //"[object Object]" --> "" + "[object Object]"

{} + []; //0
/*The JavaScript compiler understands this statement a bit differently. It considers {} as an empty code block and + [] as another statement. We saw + [] equates to 0 which is why the above expression evaluates to 0.*/

{} + {}; //NaN
//Explicit conversion of an empty object into number type yields NaN.

0 < null; //false
0 >= null; //true
/* When we compare 0 and null using relational operators, JavaScript coerces null into its primitive number type. When using relational operators the comparison is similar to
0 < Number(null)
false
0 >= Number(null)
true --> cause Number(null) => 0
*/
0 == null; //false
/* However, with the == operator, such a comparison doesn't fall into any category of rules defined for evaluation of expression by == operator. Neither 0 nor null gets coerced and by rule, if such a case occurs, where the comparison doesn't fall into any category, false is returned. */

Math.min() > Math.max(); //true
//When these functions are called without arguments, Math.min() returns Infinity and Math.max() returns -Infinity.
