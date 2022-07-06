/* Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular." */

//?-------------------------------------------------------------------

/* const Ball = function(ballType) {
  this.ballType = ballType || 'regular';
}; */

//?-------------------------------------------------------------------

class Ball {
  constructor(ballType = "regular") {
    this.ballType = ballType;
  }
}

ball1 = new Ball();
ball2 = new Ball("super");

console.log(ball1.ballType );    //=> "regular"
console.log(ball2.ballType);     //=> "super"
