/*

Contar vocales. Crear una función que cuente la cantidad de vocales que posee una palabra.

*/

let userWord = prompt(String("Ingrese una palabra"));

function vowelsNumber(word) {
  let wordArray = [];
  for (let i = 0; i < word.length; i++) {
    if (
      word[i] === "a" ||
      word[i] === "e" ||
      word[i] === "i" ||
      word[i] === "o" ||
      word[i] === "u"
    ) {
      wordArray.push(i);
    }
  }
  return wordArray.length;
}

let resultado = vowelsNumber(userWord);
console.log(resultado);
