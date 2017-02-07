// 5 4 3 2 1

// 5 10 15 20
// 4 8 12 16 20
// 3 6 9 12 15 18 21 24 27


function smallestCommons(arr) {

  var fullArr = [];

  // Generate full array from range
  for (var i=arr.sort()[0]; i<=arr.sort()[arr.length-1]; i++) {
    fullArr.push(i);
  }
  fullArr = fullArr.reverse();

  var range = [];
    for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
      range.push(i);
    }

  console.log(arr);
  console.log(range);

  return arr;
}

smallestCommons([5,1]);
