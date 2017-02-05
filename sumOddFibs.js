function sumFibs(num) {

  // Given a positive integer num, return the sum of all odd Fibonacci numbers
  // that are less than or equal to num.
  //
  // The first two numbers in the Fibonacci sequence are 1 and 1.
  // Every additional number in the sequence is the sum of the two previous numbers.
  // The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
  //
  // For example, sumFibs(10) should return 10 because all odd Fibonacci numbers
  // less than 10 are 1, 1, 3, and 5.

  // Step 1. Generate Fib sequence ending with num or less
  // ex. Fibonacci(10) - 1 1 2 3 5 8
  var total=0,
      counter=1,
      fibArr=[1,1];

  while (true) {
    total = fibArr[counter] + fibArr[counter-1];
    if (total <= num) {
      fibArr.push(total);
    } else {
      break;
    }
    counter++;
  }

  // Step 2. Filter only odd numbers
  // %2 is 1 if odd, 0 if even
  function isOdd(value) {
    return value%2 == 1;
  }

  var fibOddArr = fibArr.filter(isOdd);

  // Step 3. reduce function to add final array
  var sum = fibOddArr.reduce(function (a,b) {
    return a+b;
  }, 0);


  console.log(sum);
  return sum;

}

sumFibs(4);

sumFibs(1000);
// should return 1785.

sumFibs(4000000);
// should return 4613732.

sumFibs(4);
// should return 5.

sumFibs(75024);
// should return 60696.

sumFibs(75025);
// should return 135721.
