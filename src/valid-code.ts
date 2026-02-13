// Valid code - should still get analyzed even with broken config
export function greet(name: string): string {
  var greeting = `Hello, ${name}`; // no-var
  if (greeting == "") { // eqeqeq
    return "Hello, World";
  }
  eval("greeting eval"); // no-eval
  return greeting;
}

const arr = new Array(5); // no-array-constructor
let unused = true; // no-unused-vars
