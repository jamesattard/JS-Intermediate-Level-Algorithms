function pairElement(str) {

  var strNew = [];

  for (var i=0; i<str.length; i++) {
    strNew.push([str[i]]);
    switch(str[i]) {
      case 'G':
        strNew[i].push('C');
        break;
      case 'C':
        strNew[i].push('G');
        break;
      case 'A':
        strNew[i].push('T');
        break;
      case 'T':
        strNew[i].push('A');
        break;
    }
  }

  console.log(strNew);
  return strNew;
}

pairElement("GCG");
// should return [["G", "C"], ["C","G"],["G", "C"]]

pairElement("ATCGA")
// should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG")
// should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA")
// should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
