const persons = [
  {
    nombre: "Julia",
    apellido: "Ruiz",
    telefono: 654654,
  },
  {
    nombre: "Lucia",
    apellido: "Sanz",
    telefono: 89876545,
  },
  {
    id: "123c",
    nombre: "Natalia",
    apellido: "Garcia",
    telefono: 654684,
  },
];

const selectElement = document.querySelector(".js-select");
const inputName = document.querySelector(".js-name");
const inputLast = document.querySelector(".js-lastName");
const inputPhone = document.querySelector(".js-phone");

function paintOption() {
  for (const person of persons) {
    //listado en plural, unidad en singular
    const optionElement = document.createElement("option");
    selectElement.appendChild(optionElement);
    const textElement = document.createTextNode(person.nombre);
    optionElement.appendChild(textElement);
    //los option tienen que tener un attributo value y se puede asignar con el function setAttribute
    optionElement.setAttribute("value", person.nombre);
    //always two values, the name of the value and the value itself
    optionElement.dataset.idPerson = person.id;
  }
}

paintOption();

function handlerSelect() {
  const selectValue = ev.target.value;
  const dataset = ev;
  const selectDatasetId = ev.target[0].dataset.idPerson;
  // can also use this to do the same thing ---> const selectValue = selectElement.value;
  console.log(selectValue);
  console.log(selectDatasetId);
  console.log(dataset);
  for (const person of persons) {
    if (selectValue === person.nombre) {
      inputName.value = selectValue;
      inputLast.value = person.apellido;
      inputPhone.value = person.telefono;
    }
  }

  inputName.value = selectValue;
  //does the same thing ---> inputName.setAttribute("value", selectValue)
}

selectElement.addEventListener("change", handlerSelect);
