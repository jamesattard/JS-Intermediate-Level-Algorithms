// Find the smallest common multiple of the provided parameters that can be
// evenly divided by both, as well as by all sequential numbers in the range
// between these parameters.
//
// The range will be an array of two numbers that will not necessarily be in
// numerical order.
//
// e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is
// evenly divisible by all numbers between 1 and 3.

// lcm(a, b) = ab/gcd(a, b)
// lcm(a, b, c) = lcm(a, lcm(b, c)) = lcm(a, bc/gcd(b,c))
// ex. lcm(1,2,3,4,5) = lcm(2, lcm(3, lcm(4,5)))

function smallestCommons(arr) {
  var x, y;

  function lcm(a,b) {
    for (var i=a; i<=b; i++){
      return lcm()
    }
    return (a*b)/gcd(a,b);
  }

  function gcd(a,b) { // Euclidean algorithm

  }

  return arr;
}

smallestCommons([1, 5])
// should return 60.

// smallestCommons([5, 1])
// // should return 60.
//
// smallestCommons([1, 13])
// // should return 360360.
//
// smallestCommons([23, 18])
// // should return 6056820.
