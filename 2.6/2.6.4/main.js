"use strict";

const button = document.querySelector(".button1");
const buttonData = {
    buttonSize = 300,
    buttonColor = blue,
    buttonDisplay = words => `The button is ${words}`,
}

function handlerButton(e) {
    console.log(e);
}

button.addEventListener("click", handlerButton);