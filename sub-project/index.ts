// Sub-project with inline eslintConfig in package.json
var x = 1; // no-var
if (x == 1) { // eqeqeq
  console.log("sub-project");
}
eval("sub eval"); // no-eval
