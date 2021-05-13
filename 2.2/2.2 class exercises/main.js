'use strict';

//CLASS 2.2

//EXERCISE IN CLASS
//josefina pago mensual de 2000
//cuanto le queda despues de haber descontado los pagos de las facturas divididos entre ella y su compi de piso

const input = document.querySelector(".js-pago");
const resultHtml = document.querySelector(".js-result")
const inputValue = parseint(input.value);
const namePerson2 = "ivan";

const alquiler = 1000;
const luz = 100;
const agua = 50;

const resultadoTotal = (alquiler + luz + agua) / 2;
console.log(resultadoTotal);

const resta = inputValue - resultadoTotal
//resultHtml.innerHTML = "Josefina debe pagar " + resultadoTotal  + "y le queda " + resta;
//one possible way to do it

resultHtml.innerHTML = `Josefine debe pagar ${resultadoTotal} y le quedar ${resta}`;

//another way to do the same thing en forma mas natural




//CLASS EXPLANATION

//const number =document.querySelector(".js-number");
// const input = document.querySelector(".js-input");
// const inputValue = input.value;

// console.log(number.innerHTML);
// console.log(input.value);

// const inputValue = parseInt(input.value0);
// const textValue = parseInt(text.innerHTML);

//debe de dar un error de NaN porque estamos intentando transformar un numero que no es numero//


//EXERCISE "2.2.1"

//let number1 = "44"
//let number2 = "88"
//let sum = "number1 + number2"


//EXERCISE 2.2.9
const partnerName = 'Kate';
console.log('Kate is ' + partnerName.length + ' code units long');
console.log(`Kate is ${partnerName.length} code units long`);