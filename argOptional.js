// Create a function that sums two arguments together. If only one argument
// is provided, then return a function that expects one argument and returns
// the sum.
//
// For example, addTogether(2, 3) should return 5, and addTogether(2) should
// return a function.
//
// Calling this returned function with a single argument will then return the
// sum:
//
// var sumTwoAnd = addTogether(2);
//
// sumTwoAnd(3) returns 5.
//
// If either argument isn't a valid number, return undefined.


function addTogether() {

  var arg1 = arguments[0];
  var arg2 = arguments[1];

  function isBad(num) {
    if (typeof num !== 'number') {
      return true;
    } else {
      return false;
    }
  }

  // Check whether arg2 is passed but not a number
  if (arg2 !== undefined && isBad(arg2)){
    console.log("Error input");
    return undefined;
  } else if (!isBad(arg1) && !isBad(arg2)) {
    // Scenario 1: both arguments present and both are numbers
    console.log(arg1 + arg2);
    return (arg1 + arg2);
  } else if (isBad(arg1)) {
    // Scenario 2: one argument is present and not a number
    console.log("Error input");
    return undefined;
  } else {
    // Scenario 3: one argument is present and is a number
    return function(x) {
      if (isBad(x)) {
        console.log("Error input closure");
        return undefined;
      } else {
        console.log(arg1 + x);
        return arg1+x;
      }
    }
  }
}


// addTogether(2, 3)
// // should return 5.
//
addTogether(2)(3)
// should return 5.
// //
// addTogether("http://bit.ly/IqT6zt")
// // should return undefined.

addTogether(2, "3")
// should return undefined.
// //
// addTogether(2)([3])
// // should return undefined.
