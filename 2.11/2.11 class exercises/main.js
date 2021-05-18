"use strict";

const btnElement = document.querySelector(".btn");
const selectElement = document.querySelector(".js-recipe");
const recipes = [];

function connectToApi(country) {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      recipes = data.meals;
      console.log(recipes);
    });
}

function handlerClick(ev) {
  ev.preventDefault();
  connectToApi(selectElement.value);
}

btnElement.addEventListener("click", handlerClick);
