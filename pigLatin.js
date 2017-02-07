
function translatePigLatin(str) {

  var vowels = ['a','e','i','o','u'];
  var slicedArr = [];
  var newStr = '';

  console.log(str);

  if (vowels.indexOf(str[0]) >= 0) { // First letter is a vowel, translate immediately
    console.log('Final String:', str + 'way');
    return str + 'way';
  }

  for (var i=0; i<str.length; i++){
    if (vowels.indexOf(str[i]) >= 0) { // Vowel
      console.log('Final String: ', newStr + slicedArr.join("") + 'ay');
      return newStr + slicedArr.join("") + 'ay';
    } else { // Consonant
      // Keep slicing from string until you hit a vowel
      slicedArr.push(str[i]);
      newStr = str.slice(i+1);
    }
  }

}

translatePigLatin("california")
// should return "aliforniacay".

// translatePigLatin("paragraphs")
// // should return "aragraphspay".
//
// translatePigLatin("glove")
// // should return "oveglay".
//
translatePigLatin("algorithm")
// should return "algorithmway".
//
// translatePigLatin("eight")
// // should return "eightway".
