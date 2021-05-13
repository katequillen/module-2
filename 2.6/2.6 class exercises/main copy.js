'use strict';

const form =document.querySelector(".js-form-user");
const formData = {};

function handlerInput(pepino){
    //pepino is the name of the object that activates the event
    console.log(pepino);
    const inputName = pepino.target.name;
    console.log(inputName);
    //this is going to give the name of the element that has changed
    const inputValue = pepino.target.value;
    console.log(inputName, inputValue);
    //this gives the input that was changed and what it was changed to

    formData [inputName] = inputValue;
    console.log(formData);
    //formData, which wasn't defined earlier, now is defined
}

form.addEventListener("change", handlerInput)