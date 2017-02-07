function smallestCommons(arr) {

  // Variable declarations
  var a, b;
  var lcmResult;
  var fullArr = [];

  function gcd(a,b) { // Euclidean algorithm recursive function
    if (b === 0) {
      return a;
    }
    return gcd(b, a%b);
  }

  function gcd2(a,b) { // Euclidean algorithm iterative function
    var temp;
    while (b != 0) {
      temp = b;
      b = a%b;
      a = temp;
    }
    return a;
  }

  for (var i=arr.sort()[0]; i<=arr.sort()[arr.length-1]; i++) {
    fullArr.push(i);
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
