function smallestCommons(arr) {

  // Variable declarations
  var a, b;
  var lcmResult;
  var fullArr = [];

  function gcd(a,b) { // Euclidean algorithm iterative function
    var temp;
    while (b !== 0) {
      temp = b;
      b = a%b;
      a = temp;
    }
    return a;
  }

  function gcd2(a,b) { // Euclidean algorithm recursive function
    if (b === 0) {
      return a;
    }
    return gcd(b, a%b);
  }

  for (var j=arr.sort()[0]; j<=arr.sort()[arr.length-1]; j++) {
    fullArr.push(j);
  }
  fullArr = fullArr.reverse();

  // lcm(a, b) = ab/gcd(a,b)
  for (var i=0; i<=fullArr.length-2; i++){
    a = lcmResult;
    if (i == 0) {
      a = fullArr[i];
    }
    b = fullArr[i+1];
    lcmResult = (a*b)/gcd(a,b);
  }

  // Replace lcm algo with:
  // var lcm = range[0];
  //  for (i = 1; i < range.length; i++) {
  //  var GCD = gcd(lcm, range[i]);
  //  lcm = (lcm * range[i]) / GCD;
  //  }
  //  return lcm;

  // or even better... with a reduce function
  // return range.reduce(function(previousValue, currentValue) {
  //   var gcdPrevCurr = gcd(previousValue, currentValue);
  //   return (previousValue * currentValue) / gcdPrevCurr;
  //   });

  console.log(lcmResult);
  return lcmResult;
}

smallestCommons([1, 5]);
// should return 60.

smallestCommons([5, 1])
// should return 60.

smallestCommons([1, 13])
// should return 360360.

smallestCommons([23, 18])
// should return 6056820.

smallestCommons([11, 28])
// should return 6056820.
