"use strict";
//pintar el listado de nombres de todas las razas
// pintar una imagen de cada raza de perro

const breedList = document.querySelector(".js-breedList");
const listBreed = [];

fetch ("https://dog.ceo/api/breeds/list/all")
 .then((response) => response.json())
 .then((data) => {
    console.log(data)
    for (const breed in data.message){
       //console.log(listBreed);
      breedList.innerHTML += `<li>${breed}</li>`;
      let url = `https://dog.ceo/api/breed/${breed}/images/random`;
      //console.log(url);
      fetch(url)
      .then((result) => result.json())
      .then((dataImage) =>{
         console.log(dataImage);
         breedList.innerHTML += `<li> ${breed}<img width ="50px" height ="50px src="${dataImage.message}"></li>`
      })
    }
 })

