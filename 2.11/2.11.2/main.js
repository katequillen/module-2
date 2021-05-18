"use strict";

function getDataSwapi() {
  const input = document.querySelector("input");
  const inputValue = input.value;

  fetch(`https://swapi.dev/api/people/?search=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      const char = document.querySelector(".js-name");
      char.innerHTML = data.name;
    });
}

const btn = document.querySelector(".js-button");
btn.addEventListener("click", getDataSwapi);
