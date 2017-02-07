
function myReplace(str, before, after) {

  if (before[0] == before[0].toUpperCase()) {
    //var newAfter = after[0].toUpperCase() + after.slice(1); //Upper Case
    str = str.replace(before, after[0].toUpperCase() + after.slice(1));
  } else {
    str = str.replace(before, after);
  }

  console.log(str);
  return str;
}

// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// myReplace("Let us go to the store", "store", "mall")
// // "Let us go to the mall".

// myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
// "He is Sitting on the couch".

myReplace("This has a spellngi error", "spellngi", "spelling")
// // "This has a spelling error".

myReplace("His name is Tom", "Tom", "john")
// // "His name is John".

myReplace("Let us get back to more Coding", "Coding", "algorithms")
// // "Let us get back to more Algorithms".
