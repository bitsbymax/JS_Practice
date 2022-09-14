//-------------------!!! Three Ways to Reverse a String in JavaScript !!!--------------

function isPalindrome(str) {
  const lowerTarget = str.toLowerCase();
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  let normal = '';
  let reversed = '';

  for (const char of lowerTarget) {
    if (abc.includes(char)) {
      normal += char;  // символи записуються в звичайному порядку
      reversed = char + reversed;   // символи записуються в зворотньому порядку (кожна наступна буква ставиться на початок)
    }
  }
  return normal === reversed;
}
//-----------------------------------------------------------------//

function isPalindrome(str) {   // 
  let reverseStr = str.split('').reverse().join(''); 
  return reverseStr === str;
}
//-----------------------------------------------------------------//

function reverseString(str) {
  if (str === "") // This is the terminal case that will end the recursion
    return "";
  
  else
    return reverseString(str.substr(1)) + str.charAt(0);
}
