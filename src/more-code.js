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

// === v3 DIFF TEST — new code below ===

// no-alert
function warnUser() {
    alert("Warning!");
    confirm("Continue?");
}

// no-multi-str
var template = "line one \
line two \
line three";

// no-sequences
var seqVal = (10, 20, 30);

// no-implied-eval
function deferWork(code) {
    setTimeout(code, 100);
    setInterval("doWork()", 200);
}

// no-extend-native
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

export { warnUser, template, seqVal, deferWork };
