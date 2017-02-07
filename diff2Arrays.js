function diffArray(arr1, arr2) {
  var newArr = [];

  for (var i=0; i<arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1){
        newArr.push(arr1[i]);
      }
  }

  for (var j=0; j<arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1){
        newArr.push(arr2[j]);
      }
  }

  newArr = newArr.filter(function(num){
    return num !== null;
  });

  return newArr;
}

//console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
//console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));
