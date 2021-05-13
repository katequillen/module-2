'use strict';

const result = document.querySelector(".js-text");

const price = 100;
const iva = price * 0.21;
const total = price + iva;

result.innerHTML = `The price is: ${price}, the IVA is ${iva} and the total price is ${total}.`;

//class or nominal function
// function iva(price) {
//     const iva = price * 0.21;
//     const total = price + iva;
//     result.innerHTML = `The price is: ${price}, the IVA is ${iva} and the total price is ${total}.`;
// }

//iva(100);
//iva(1000);
//iva(500);

//the above is also possible


//This below can substitute for the line with result.innerHTML

//const result = `The price is: ${price}, the IVA is ${iva} and the total price is ${total}.`;
//return result;





//arrow function, doesn't use the word function, the work of function happens inside the const and is saved as a variable
const title = document.querySelector(".js-title");

const saludar = (hora) => {
    if(hora < 13) {
    return"buenos dias";
    }
    else if (hora <20) {
    return "buenas tardes";
    }
    else {
    return "buenas noches";
    }
}

title.innerHTML = saludar(21);