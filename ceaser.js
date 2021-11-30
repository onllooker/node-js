function Encode(str, offset) {
  var charArray = str.split("");

  function shiftChar(char) {
    var isAlpha = /[A-Za-z]/i;

    if (isAlpha.test(char)) {
      char = String.fromCharCode(char.charCodeAt(0) + 1);
      if ((char > "Z" && char < "a") || char > "z")
        char = String.fromCharCode(char.charCodeAt(0) - 26);
    }
    return char;
  }

  var result = charArray.map(shiftChar).join("");

  return result;
}

console.log(CaesarCipher("tt"));
function Decode(str, offset) {
  var charArray = str.split("");

  function shiftChar(char) {
    var isAlpha = /[A-Za-z]/i;

    if (isAlpha.test(char)) {
      char = String.fromCharCode(char.charCodeAt(0) - 1);
      if ((char > "Z" && char < "a") || char > "z")
        char = String.fromCharCode(char.charCodeAt(0) - 26);
    }
    return char;
  }

  var result = charArray.map(shiftChar).join("");

  return result;
}
