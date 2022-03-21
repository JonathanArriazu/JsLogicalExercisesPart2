/*

Limpiar una array. Debemos crear una función que tome una array de múltiples datos y que solo devuelva los strings dentro de la array.
Ejemplo: [1, 'hola', 2, true, 'mundo'] => ['hola', 'mundo']

*/
let words = [1, "hola", 2, true, "mundo"];

function filteredArray(words) {
  let result = words.filter((word) => typeof word === "string"); // Esto es como leer: del array words, filtrar las palabras que sean de tipo string.

  return result;
}

let resultado = filteredArray(words);
console.log(resultado);
