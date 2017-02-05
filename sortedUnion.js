function uniteUnique(arr) {

  var arra = arrays = [];
  var args = Array.from(arguments);

  function flattenArray(flat, elem) {
    return flat.concat(elem);
  }

  arrays = args.reduce(flattenArray, []);

  for (var i=0; i<arrays.length; i++) {
    if (arra.indexOf(arrays[i]) == -1) {
      arra.push(arrays[i]);
    }
  }

  console.log(arra);
  return arra;
}


uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
// should return [1, 3, 2, 5, 4].

uniteUnique([1, 3, 2], [1, [5]], [2, [4]])
// should return [1, 3, 2, [5], [4]].

uniteUnique([1, 2, 3], [5, 2, 1])
// should return [1, 2, 3, 5].

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])
// should return [1, 2, 3, 5, 4, 6, 7, 8].
