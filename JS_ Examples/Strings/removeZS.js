/* Допиши функцію removeZS так, щоб вона повертала рядок string без символів z та s. Потрібно видалити символи у всіх регістрах.

Приклад:

removeZS('Mate academy') === 'Mate academy'
removeZS('zzzmatesss') === 'mate'
removeZS('ZMzastSe AcaZzzzdemsSy') === 'Mate Academy'
removeZS('zszszSSZsz') === '' */


function removeZs(string) {
  let result = '';
  for (const char of string) {
    if (!'zs'.includes(char.toLowerCase())) { 
      result += char;                          
    }
  }
  return result;
}
