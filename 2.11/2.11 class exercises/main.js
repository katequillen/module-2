"use strict";

const btnElement = document.querySelector(".btn");
const selectElement = document.querySelector(".js-recipe");
const ulElement = document.querySelector(".recipes-list");
let recipes = [];

function renderRecipe() {
  ulElement.innerHTML = "";
  //this bit of code ^ cleans the li and resets the contents each time so that it doesn't accumulate each time the button is clicked
  for (const recipe of recipes) {
    ulElement.innerHTML += `<li id="${recipe.idMeal}"> ${recipe.strMeal}</li>`;
  }
}

function connectToApi(country) {
  //also possible:
  //function connectToApi() {
  //const country = selectElement.value;
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      recipes = data.meals;
      renderRecipe();
      //console.log(recipes);
    });
}

function setLocalStorage() {
  localStorage.setItem("localList", JSON.stringify(recipes));
}

//^this is the function to save something in local storage

function getLocalStorage() {
  let list = JSON.parse(localStorage.getItem("localList"));
  console.log(list);
  if (list != null) {
    //^this says, if list is different from null...
    return list;
  } else {
    return (list = []);
    //^this says, if not, return an empty array. this way it never returns null, which would produce an error
  }
}

function handlerClick() {
  connectToApi();
}

btnElement.addEventListener("click", handlerClick);

getLocalStorage();
console.log("cargo la pagina");
