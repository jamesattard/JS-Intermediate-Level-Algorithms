function whatIsInAName(collection, source) {
  var srcKeys = Object.keys(source);
  var j=0;

  console.log(srcKeys);

  var arr = collection.filter(function (obj) {
    console.log('------', j++, '------');
    for(var i = 0; i < srcKeys.length; i++) {
      if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
        console.log(srcKeys[i]);
        console.log(obj.hasOwnProperty(srcKeys[i]));
        console.log(obj[srcKeys[i]]);
        return false;
      }
    }
    return true;
  });

  return arr;
}

// test here
console.log(

whatIsInAName(
  [
    { "a": 1, "b": 2 },
    { "a": 1 },
    { "a": 1, "b": 2, "c": 2 }
  ],
  { "a": 1, "b": 2 }
)

);
