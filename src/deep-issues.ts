// File with many different lint issue types
var a = 1; // no-var
var b = 2; // no-var
var c = 3; // no-var
let unused1 = "x"; // no-unused-vars
let unused2 = "y"; // no-unused-vars

if (a == b) {} // eqeqeq
if (b != c) {} // eqeqeq

eval("eval1"); // no-eval
eval("eval2"); // no-eval

const arr1 = new Array(); // no-array-constructor
const arr2 = new Array(1, 2, 3); // no-array-constructor

try { a++; } catch(e) {} // no-empty
try { b++; } catch(e) {} // no-empty

// Nested ternary
const val = a ? (b ? 1 : 2) : (c ? 3 : 4); // no-nested-ternary

// Debugger
debugger; // no-debugger

// Regex
const re2 = new RegExp("abc"); // prefer-regex-literals

export { a, b, c, val };
