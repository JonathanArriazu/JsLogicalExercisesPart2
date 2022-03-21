/*

Quitar los duplicados de una array. Escribir una función que tome una array por parámetros y quite todos los valores duplicados.
Ejemplo: [1, 1, 2,2, true, true, 'hola', 'mundo', 'hola'] => [1, 2, true, hola, mundo]

*/

let array1 = [1, 1, 2, 2, true, true, "hola", "mundo", "hola"];

function removeDuplicates(array) {
  return array.filter((item, index) => array.indexOf(item) === index);
}

let resultado = removeDuplicates(array1);
console.log(resultado);
