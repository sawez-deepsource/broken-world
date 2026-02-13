// More code to lint
function processData(data) {
  var result = []; // no-var

  for (var i = 0; i < data.length; i++) { // no-var
    if (data[i] == null) { // eqeqeq
      continue;
    }
    result.push(data[i]);
  }

  eval("process eval"); // no-eval

  // Empty catch
  try {
    JSON.parse("invalid");
  } catch (e) {} // no-empty

  return result;
}

// with statement (strict mode violation)
var obj = { a: 1 };
with (obj) { // no-with
  console.log(a);
}
