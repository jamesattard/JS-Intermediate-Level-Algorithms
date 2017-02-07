function sumAll(arr) {
  const start = Math.min(...arr);
  const stop = Math.max(...arr) + 1;
  console.log("Start: ", start);
  console.log("Stop:", stop);
  console.log("Array Spread: ", [...Array(stop-start).keys()]);
  return [...Array(stop-start).keys()].reduce(function(a, b){
    console.log(a, b);
    return a+b+start;
  }, 0);
}

console.log(sumAll([1, 4]));
