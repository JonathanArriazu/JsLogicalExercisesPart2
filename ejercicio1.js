/*

Escribir una función que tome una array de números por parámetros y devuelva un array con el número mayor y el menor.
Ejemplo: [1,2, 3,4, 5] => [1, 5]

*/
let array = [1, 2, 3, 5, 10];

function minAndMaxNumbers(numeros) {
  let maxNumber = Math.max(...numeros);
  let minNumber = Math.min(...numeros);
  let newArray = [];
  newArray.push(maxNumber, minNumber); //.push añade elementos al final del array
  return ` El numero mas grande es ${maxNumber} \n El mas chico es ${minNumber}\n Y el nuevo array es ${newArray}`;
}

console.log(minAndMaxNumbers(array));
