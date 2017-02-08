
function binaryAgent(str) {

  function binary2Decimal (binaryStr) {
    return parseInt(binaryStr, 2);
  }

  function decimal2Str (decimalStr) {
    return String.fromCharCode(decimalStr);
  }

  var decimalArr = [];
  var stringArr = [];

  var binaryArr = str.split(" ");
  for (var i=0; i<binaryArr.length; i++) {
    decimalArr.push(binary2Decimal(binaryArr[i]));
  }
  for (var j=0; j<decimalArr.length; j++) {
    stringArr.push(decimal2Str(decimalArr[j]));
  }

  str = stringArr.join("");

  return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
