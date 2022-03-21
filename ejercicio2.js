/*

Escribir una función que tome dos parámetros. una string y un caracter. La función debe devolver cuántas veces aparece ese caracter en la string. Si el caracter no aparece en la string debe retornar false.
Ejemplo: ("hola mundo", "o") => 2 veces.

*/

let cadena = prompt("aaa");
let caracter = prompt("a");

function caracterRepetido(frase, letra) {
  let indices = [];
  for (var i = 0; i < frase.length; i++) {
    if (frase[i].toLowerCase() === letra) {
      indices.push(i);
    } else {
      return false;
    }
  }
  return indices.length;
}

let resultado = caracterRepetido(cadena, caracter);
console.log(resultado);
