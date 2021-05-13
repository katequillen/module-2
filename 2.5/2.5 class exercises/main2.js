"use strict";

const formElement = document.querySelector(".js-form");
//form saved here
const inputName = document.querySelector(".js-name");
const result = document.querySelector(".js-result");

//arrow function; parameter (in parentheses) is usually something that refers to the event
const handlerForm = (event) =>{
    //target tells us which part of the form the even is coming from. the .value gives you the value of only the clicked element
    console.log(event.target.value);
    //current.Target gives information about the whole thing
    console.log(event.currentTarget);
    result.innerHTML = event.target.value;
}

formElement.addEventListener("change", handlerForm);

//currentTarget = la estructura entera (padre), el elemento sobre que escuchamos
//target = individual hijos