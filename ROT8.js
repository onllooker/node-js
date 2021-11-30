function EncodeROT8(word) {
  var charArr = word.split("");

  function shiftchar(char) {
    var isAlpha = /[A-Za-z]/;
    if (isAlpha.test(char)) {
      char = String.fromCharCode(char.charCodeAt(0) + 8);
      if ((char > "Z" && char < "a") || char > "z")
        char = String.fromCharCode(char.charCodeAt(0) - 26);
    }
    return char;
  }
  var result = charArr.map(shiftchar).join("");

  return result;
}
console.log(EncodeROT8("A"));

function DecodeROT8(word) {
  var charArr = word.split("");

  function shiftchar(char) {
    var isAlpha = /[A-Za-z]/;
    if (isAlpha.test(char)) {
      char = String.fromCharCode(char.charCodeAt(0) - 8);
      if ((char > "Z" && char < "a") || char > "z")
        char = String.fromCharCode(char.charCodeAt(0) - 26);
    }
    return char;
  }
  var result = charArr.map(shiftchar).join("");

  return result;
}
console.log(DecodeROT8("A"));
