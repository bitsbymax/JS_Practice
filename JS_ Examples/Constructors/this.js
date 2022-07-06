const f = function() {
  const arrow = () => {
    console.log(this);
  }

  arrow();
}

const user = {
  name: 'Maks',
  test: f,
};

/* 
Global              this === window
arrow();            this === is taken from outside
f();                this = undefined or windod if !'use strict'
user.methos();      this === user
new f();            this === just created object;

f.call(user);       this === user
f.apply(user);      this === user

const wrapper = f.bind(user);
g();                this === user
*/

//!---------------------------------------------------//
let length = 4;

function callback() {
  console.log(this.length); // 3
}

const object = {
  length: 5,
  method() {
    arguments[0]();
  }
};

object.method(callback, 1, 2);