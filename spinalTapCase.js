function spinalCase(str) {

  // Match whitespace or underscore
  // '+' means one or more whitespaces/underscores
  var reSpaceUnder = /\s+|_+/g;

  // Match chars that are lower case followed by upper case
  var reLowUpper = /([a-z])([A-Z])/g;

  // Put a space between reLowUpper matches
  str = str.replace(reLowUpper, '$1 $2');

  // Now it's time to replace space or underscore with -
  // and lower case them...
  str = str.replace(reSpaceUnder, '-').toLowerCase();
  console.log(str);

  return str;
}

spinalCase("This Is Spinal Tap")
// should return "this-is-spinal-tap".

spinalCase("thisIsSpinalTap")
// should return "this-is-spinal-tap".

spinalCase("The_Andy_Griffith_Show")
// should return "the-andy-griffith-show".

spinalCase("Teletubbies say Eh-oh")
// should return "teletubbies-say-eh-oh".

spinalCase("AllThe-small Things")
// should return "all-the-small-things".
