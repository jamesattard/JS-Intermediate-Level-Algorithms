
function fearNotLetter(str) {

  var missingNum;

  for (var i=1; i<str.length; i++) {
    if (str.charCodeAt(i) - str.charCodeAt(i-1) > 1) {
      //console.log(str.charCodeAt(i), str.charCodeAt(i-1));
      missingNum = str.charCodeAt(i-1)+1;
      //console.log(String.fromCharCode(missingNum));
      return String.fromCharCode(missingNum);
    }
  }

  return undefined;

}

fearNotLetter("abce");
// should return "d".

// fearNotLetter("abcdefghjklmno");
// // should return "i".
//
// fearNotLetter("bcd");
// // should return undefined.
//
// fearNotLetter("yz");
// // should return undefined.
