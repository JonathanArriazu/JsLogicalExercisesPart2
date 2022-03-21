/*

Escribir una función que quite todos las vocales de una string.
Ejemplo: (banana) => bnn

*/

let string1 = "banana";

function removeVowels(string) {
  let array = [];
  let newString;
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] !== "a" &&
      string[i] !== "e" &&
      string[i] !== "i" &&
      string[i] !== "o" &&
      string[i] !== "u"
    ) {
      array.push(string[i]);
    }
    newString = array.join("");
  }
  return newString;
}
console.log(removeVowels(string1));
