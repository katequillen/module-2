"use strict";

const adalabers = ["rocio", "silvia","cinthya","yosiris","jana"];

const ages =[32,26,32,30,25];

adalabers[5] = "julia";

adalabers.push("barbara");
//PUSH the push add things to the end of the array, e.g. when you haz click in a product on a website and it adds it to the carrito de compra
console.log(adalabers);


const adalabersAges = adalabers.concat(ages);
//CONCAT this sticks the two arrays together, ages after adalabers. You can add as many as you like, as well as the same array over and over again


const newAda = adalabers.slice(1,4);
//SLICE no cuenta la ultima posicion, o sea 1,4 quita posiciones 1,2&3

const deleteAda = ages.splice(2,2);

//SPLICE takes out two elements from position 2 and puts them in another const (deleteAda). So now deleteAda has [32,30] and ages has [32,26,25]







//push recibe el elemento que quiero añadir
//concat recibe el conjunto de elementos que quiero añadir