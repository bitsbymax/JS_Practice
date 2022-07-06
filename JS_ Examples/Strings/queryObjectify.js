const inData = "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue&experiments.theme=dark";

function queryObjectify(str) {
  let res = {};

  str = str.split('&'); // str = (4) ['user.name.firstname=Bob', 'user.name.lastname=Smith', 'user.favoritecolor=Light%20Blue', 'experiments.theme=dark']
  str = str.map(i => i.split('.'));
/* 
str: Array(4) --> [Array(3), Array(3), Array(2), Array(2)] -- двовимірний масив
0: (3) ['user', 'name', 'firstname=Bob']
1: (3) ['user', 'name', 'lastname=Smith']
2: (2) ['user', 'favoritecolor=Light%20Blue']
3: (2) ['experiments', 'theme=dark']
*/

  for (let i = 0; i < str.length; i++) { 
    let currObj = res;
    for (let key = 0; key < str[i].length; key++) {
      let name = str[i][key]; // "user"
      if (key == str[i].length - 1) { //  ця умова спрацює на 2 ітерації, кеу = 2, str[i].length - 1 = 2
        name = name.split('='); // ['firstname', 'Bob']
        currObj[name[0]] = decodeURIComponent((name[1]));
        break;
      }
      if (currObj[name]) {
        currObj = currObj[name];
      } else {
        currObj[name] = {}; // currObj.user = {} --> { user: {},}
        currObj = currObj[name];
      }
    }
  }

  return res;
}

console.log(queryObjectify(inData));

/* {
  user: {
    name: { firstname: 'Bob', lastname: 'Smith' },
    favoritecolor: 'Light Blue',
  },
  experiments: { theme: 'dark' },
}; */
