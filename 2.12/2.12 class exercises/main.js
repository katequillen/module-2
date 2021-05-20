"use strict";

const groups = [
  {
    id: "asf",
    isFav: false,
    name: "Pelota",
  },
  {
    id: "jashdlajsdhlasjd",
    isFav: true,
    name: "Pegatina",
  },
  {
    id: "asdfasdfa",
    isFav: false,
    name: "DEF",
  },
  {
    id: "jxdfhdfd",
    isFav: true,
    name: "ABC",
  },
  {
    id: "n.mnc",
    isFav: true,
    name: "GHIJK",
  },
];

const ulElement = document.querySelector(".js-list");
// this establishes which element is going to be the mother of the li we create below

// const liElement = document.createElement("li");
// //this creates the element li
// const textElement = document.createTextNode("Kit");

// liElement.appendChild(textElement);
// //this says that the text element above is the child of the li above

// ulElement.appendChild(liElement);
// //this says that the li above is child of the ul above

// Same steps always:
// 1. create Element, say who the child is
// 2. create text, say who the child is

const paintElements = () => {
  for (const group of groups) {
    //de cada listado de groups, guardar todo el conjunto en el constante group sin necesidad de aceder a los posiciones 0, 1, etc
    const liElement = document.createElement("li");
    //ahora, metemos el texto y lo añadimos al ul
    ulElement.appendChild(liElement);
    const textElement = document.createTextNode(group.name);
    liElement.appendChild(textElement);
    // same as: if(group.isFav === true)
    if (group.isFav) {
      liElement.classList.add("red");
    } else {
      liElement.classList.add("blue");
    }
  }
};

paintElements();
