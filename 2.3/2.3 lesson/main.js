 'use strict';

 const input = document.querySelector(".js-hour");

 const inputValue = parseInt(input.value);
 const result = document.querySelector(".js-result");
 const nameper = "josefina";
 const nameper2 = "pepito"

 //Si solo quiero mandar un mensaje cuando llega tarde, es un if simple

 if(inputValue > 9){
    result.innerHTML= "estas llegando tarde";
 }

 //if compuesto: if-else

 if(nameper === "josefina" || nameper === "pepito" && inputValue > 9) {
     result.innerHTML = "estas despedida";
 }
 else {
     result.innerHTML = "estas llegando tarde";
 }

 //if nameper is defined as Josefine OR pepito AND the inputvalue is greater than 9, display estas despedida
 //if nameper is defined as NEITHER josefine NOR pepito AND the input value is greater  9, display "estas llegando tarde"

//in the following case, both of them have to arrive late in order to display "estas despedido"

 //if(nameper === "josefina" && nameper === "pepito" && inputValue > 9)

