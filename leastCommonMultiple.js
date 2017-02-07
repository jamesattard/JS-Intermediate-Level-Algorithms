// lcm(a, b) = ab/gcd(a, b)

function smallestCommons(arr) {

  function lcm(a,b) {
    for (var i=a; i<=b; i++){
      return lcm()
    }
    return (a*b)/gcd(a,b);
  }

  function gcd(a,b) { // Euclidean algorithm recursive function
    if (b === 0) {
      //console.log(a);
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
    //console.log(a);
    return a;
  }

  gcd2(10, 15);
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
