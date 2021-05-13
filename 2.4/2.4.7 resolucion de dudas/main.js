
"use script";

function getEl() {

const element = document.querySelector(selector);
    if (element === null) {
        console.error ("El selector $selector) no existe");
    } else {
        return element;
    }
}
