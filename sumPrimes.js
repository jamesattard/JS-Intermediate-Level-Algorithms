function sumPrimes(num) {

  // Sum all the prime numbers up to and including the provided number.
  //
  // A prime number is defined as a number greater than one and having only
  // two divisors, one and itself. For example, 2 is a prime number because
  // it's only divisible by one and two.
  //
  // The provided number may not be a prime.

  var primeArr = [2]; // smallest prime number
  var isPrime = true;

  if (num > 2) {
    for (var i=3; i<=num; i++) { // scan for primes from 3 up to num
      isPrime = true; // reset boolean
      for (var j=2; j<i; j++) { // divide by all nums starting from 2
        if (i%j !== 0) {
          continue;
        } else {
          isPrime = false;
        }
      }
      if (isPrime === true) {
        primeArr.push(i);
      }
    }
  }

  // reduce array to calculate total
  var sumPrimeArr = primeArr.reduce(function(a,b) {
    return a+b;
  }, 0);

  console.log(primeArr);
  console.log(sumPrimeArr);

  return sumPrimeArr;
}


sumPrimes(10)
// should return 17.

sumPrimes(977)
// should return 73156.
