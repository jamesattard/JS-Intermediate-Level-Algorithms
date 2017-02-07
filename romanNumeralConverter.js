var convertToRoman = function(num) {
  // algorithm:

  // 27 -> 10 + 10 + 5 + 2
  // Split in tens, five, ones.
  // x2 tens
  // x1 five
  // x2 ones
  // XXVII

  // 34 -> 10 + 10 + 10 + 4
  // Split in tens, four.
  // x3 tens
  // x1 four
  // XXXIV

  // 798 -> 500 + 100 + 100 + 90 + 5 + 3
  // Split in five hundred, one hundreds, ninety, five, ones.
  // x1 five hundred
  // x2 one hundred
  // x1 ninety
  // x1 five
  // x3 ones
  // DCCXCVIII

  var arrRoman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var arrDecimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNum = '';

  for (var i = 0; i < arrDecimal.length; i++){
    while (num >= arrDecimal[i]) {
      romanNum += arrRoman[i];
      num -= arrDecimal[i];
    }
  }

  return romanNum;
}

// test here
console.log(convertToRoman(36));
