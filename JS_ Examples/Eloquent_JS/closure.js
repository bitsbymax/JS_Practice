function multiplier(factor) {
  return number => number * factor;
}
//Local bindings are created anew for every call and different calls can't trample on one another's local bindings
let twice = multiplier(2);
twice(5); //10

/*
This feature - being able to reference a specific instance of a local binding in an enclosing scope - is called CLOSURE.A function that references bindings from local scopes around it is called CLOSURE.
*/