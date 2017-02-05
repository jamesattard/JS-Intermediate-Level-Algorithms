function convertHTML(str) {

  var reAmp = /&/g;
  var reSmall = /</g;
  var reLarge = />/g;
  var reQuote = /"/g;
  var reApost = /'/g;

  str = str.replace(reAmp, '&​amp;');
  str = str.replace(reSmall, '&​lt;');
  str = str.replace(reLarge, '&​gt;');
  str = str.replace(reQuote, '&​quot;');
  str = str.replace(reApost, '&​apos;');

  console.log(str);

  // &colon;&rpar;
  return str;
}

convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos")
convertHTML("Sixty > twelve")
convertHTML('Stuff in "quotation marks"')
convertHTML("Shindler's List")
convertHTML("<>")
