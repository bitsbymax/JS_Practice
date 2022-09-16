'use strict';
const stylesString = `
  background-color:      #fff;
-webkit-border-radius: 5px;
  border-radius     : 5px;
`;

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */

/* function convertToObject(sourceString) {
  const convertedStyles = {};

  sourceString.split(';').forEach(el => {
    const [property, value] = el.split(':');

    if (property.length > 1 && value !== undefined) {
      const formattedProperty = property.trim();

      convertedStyles[formattedProperty] = value.trim();
    }
  });

  return convertedStyles;
} */

/* const convertToObject = (sourceString) => {
  return sourceString.split(';') //rule: "\n  background-color:      #fff"  string
    .map(rule => rule.split(':')) // 0: "\n  background-color" 1: "      #fff"  array
    .filter(pair => pair.length === 2)  // ['\n  background-color', '      #fff']  array
    .reduce(
      (result, [key, value]) => ({  // key: "\n  background-color"  value: "      #fff"
        ...result,    // на кожній ітерація в result будуть додаватись всі властивості з результату виконання попереднього коллбека
        [key.trim()]: value.trim(),   // і додаватимуться нові ключ і значення
      }),

      {}
    );
}; */

const convertToObject = (sourceString) => {
  return new Map(   //! Object.fromEntries
    sourceString.split(';')
      .map(rule => rule.split(':'))
      .filter(pair => pair.length === 2)
      .map(([key, value]) => [key.trim(), value.trim()])
  );
};

console.log(convertToObject(stylesString));
/* const stylesString = `
  background-color:      #fff;
-webkit-border-radius: 5px;
  border-radius     : 5px;
  border: 1px solid #e8e8e8;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  clear   : both       ;
  cursor: pointer;
  float: left;
  font-family: inherit;
      font-size: 14px;
  font-weight: 400;
  height: 42px;
  line-height:    40px;
  outline: 0;
  padding-left    : 18px;
  padding-right: 30px;
  ;

  ;
  position: relative;


  text-align: left !important;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;


  white-space: nowrap;
  width: auto;
`; */
