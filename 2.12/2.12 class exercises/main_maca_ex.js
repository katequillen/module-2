const arr = ["red", "blue", "pink"];

function getList(lista) {
  console.log(lista, "fuera");
  for (
    let i = 0;
    i < arr.length;
    i++ //i = 0 is the position where we start
  ) // i<arr.length reads the whole length of the array
  //i++ means it goes one by one
  {
    let valorEnCadaPasada = arr[i];
    //valoren CadaPasada is the constant and it is the array of todo el i. si queremos solo una posicition usamos el numero de la posicion y no la i
    console.log(valorEnCadaPasada);
    const color = document.querySelector("#" + valorEnCadaPasada);
    console.log(color);
    color.value = arr[i];
    color.style.backgroundColor = arr[i];
  }
}

const url = "https://api.tvmaze.com/search/shows?q=";
const searchValue = document.querySelector("#searchValue");
function llamarAlApi() {
  let urlConsulta = url + searchValue.value;
  console.log(urlConsulta);
  generarHtml(arr);
}
function generarHtml(colores) {
  console.log();
  for (let i = 0; i < arr.length; i++) {
    let valorEnCadaPasada = arr[i];
    console.log(valorEnCadaPasada);
    const ul = document.querySelector("#ul");
    ul.innerHTML += "<li>" + arr[i] + "</li>";
  }
}
function getSearch() {
  console.log("HOLA");
  console.log(searchValue.value);
  searchValue.value = "caracola";
  getFer();
  getPersona("Maca");
  getPersona("Mar");
  getPersona(searchValue);
  getList(arr);
}
const button = document.querySelector("#searchButton");
button.addEventListener("click", llamarAlApi);
const arr = ["red", "blue", "pink"];
function getFer() {
  console.log("fer");
}
function getPersona(name) {
  console.log(name);
}
function getList(lista) {
  console.log(lista, "fuera");
  for (let i = 0; i < arr.length; i++) {
    let valorEnCadaPasada = arr[i];
    console.log(valorEnCadaPasada);
    const color = document.querySelector("#" + valorEnCadaPasada);
    console.log(color);
    color.value = arr[i];
    color.style.backgroundColor = arr[i];
  }
}
