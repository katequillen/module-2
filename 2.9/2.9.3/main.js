const lostNumbers = [4, 8, 15, 16, 23, 42];

const numbersEven = [];
const numbersOdd = [];

function parOimpar(lostNumbers) {
    for (let i=0; par = 0; impar = 0; i <=lostNumbers.length; i++){
        if (lostNumbers % 2 === 0) {
            lostNumbers.push(numbersEven[i]);
        }
    }
}

console.log(numbersEven);




"use strict";
// Array de numeros dado
const lostNumbers = [4, 8, 15, 16, 23, 31, 42];
// Nuevo array que extrae elementos pares e impares
const lostNumbersEven = [];
const lostNumbersOdd = [];
function bestLostNumber() {
  for (let i = 0, par = 0, impar = 0; i < lostNumbers.length; i++)
    if (lostNumbers[i] % 2 === 0) {
      // Par
      lostNumbersEven.push(lostNumbers[i]);
    } else {
      // Impar
      lostNumbersOdd.push(lostNumbers[i]);
    }
  console.log(lostNumbersEven); // Pares
  console.log(lostNumbersOdd); // Impares
}
/*function bestLostNumber() {
  for (let i = 0, par = 0, impar = 0; i < lostNumbers.length; i++)
    if (lostNumbers[i] % 2) {
      // Par
      lostNumbersEven[par++] = lostNumbers[i];
    } else {
      // Impar
      lostNumbersOdd[impar++] = lostNumbers[i];
    }
  console.log(lostNumbersOdd);
  console.log(lostNumbersEven);
}*/
bestLostNumber();
// Nuevo array que extrae elementos multiplos de 3
const lostNumbersMultiple = [];
function multipleNumber() {
  for (let i = 0, par = 0, impar = 0; i < lostNumbers.length; i++)
    if (lostNumbers[i] % 3 === 0) {
      // Multiplos de 3
      lostNumbersMultiple.push(lostNumbers[i]);
    }
  console.log(lostNumbersMultiple); // Multiplos de 3
}
/*function multipleNumber() {
  for (let i = 0, mult = 0; i < lostNumbers.length; i++)
    if (lostNumbers[i] % 3 === 0) {
      lostNumbersMultiple[mult++] = lostNumbers[i];
    }
  console.log(lostNumbersMultiple);
}*/
multipleNumber();
// Concatenación de dos arrays anteriores
const lostNumbersConcat = lostNumbersEven.concat(lostNumbersMultiple);
console.log(lostNumbersConcat);