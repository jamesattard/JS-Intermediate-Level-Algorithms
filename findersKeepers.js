// Create a function that looks through an array (first argument) and returns
// the first element in the array that passes a truth test (second argument)

function findElement(arr, func) {

  myArr = arguments[0];
  myFun = arguments[1];

  for (var i=0; i<=myArr.length; i++) {
    if (myFun(myArr[i]) === true) {
      console.log("Found! ", myArr[i]);
      return myArr[i];
    }
  }

}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
