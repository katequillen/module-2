"use strict";

const input = document.querySelector(".js-age")
const ageValue = parseInt(input.value);
console.log(ageValue);

//assigning constants to classes
const resultStop = document.querySelector(".js-result-stop");
const resultGo = document.querySelector(".js-result-go");
const resultMax = document.querySelector(".js-result-max");


//the below removes the class hidden for each of the following conditions
if (ageValue < 18){
    resultStop.classList.remove("hidden")
}
else if(ageValue >=18 && ageValue <= 100){
    resultGo.classList.remove("hidden")
}
//else if = volver a preguntar porque hay una tercera condicion
//the -- ageValue >=18 &&  -- isn't necessary in this case because the first condition already gives the tope del rango
else{
    resultMax.classList.remove("hidden");
}
//in the last condition, -- (ageValue >=100) -- isn't necessary because it's the only condition left (less then 18 and less than 100 are already covered by the other two conditions)

//
//
//
//operador ternario - solo se puede usar cuando hay dos condiciones y no mas e.g. un nombre. Solo casos muy especificas cuando hay solo una instrucion

const nombre = "ivan"
const msj = (nombre === "miguel")? "no te hace falta ir al barbero" : "haces milonario al barbero";
//if nomber equals miguel exactamente, displays "no te hace falta" if it doesn't, "haces milonario"
const msjProfe = document.querySelector(".js-msj-profe");
msjProfe.innerHTML = msj;
//the above displays the message in the html in the browser instead of in the console log


console.log(msj);



