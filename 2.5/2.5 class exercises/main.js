"use strict";
//primero selecionar el elemento
const nameInput = document.querySelector(".js-name");
//this function only executes when the event happens
function handlerInput(){
    //console.log("llamo a la funcion");
    //this console.log is just to check that it works bc otherwise it will show nothing in the console
    const inputValue = nameInput.value;
    console.log(inputValue);
    //this console log checks that the input works in the console. If you write Kit, it displays Kit in the console
    const pa = document.querySelector(".js-greeting");
    pa.innerHTML += inputValue + '!';
    //el mas igual maintains the content PLUS the value of the input. el concatenacion aqui esta bien porque el un simbolo pequeño/corto
    //also possible: pa.innerHTML = 'hola' + inputValue + '!';
}

//segundo, escuchar el elemento. primero param siempre es el type of evento entre comillas. los eventos son todos definidos ya por javascript. The handlerInput function is never put in parenthesis because it is a callback
nameInput.addEventListener("change", handlerInput);

//nameInput.addEventListener("keyup", handlerInput);
//keyup changes the result each time a key is pressed, while change only changes it when the focus is removed from the field
//if you want to listen to more than one event, you have to make various listeners- you can't add two to the same EventListener