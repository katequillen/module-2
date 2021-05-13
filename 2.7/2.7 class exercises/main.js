//how to make an array without actually using arrays- a lot of redundancy

// const resultElement = document.querySelector("js-result");
// const m1 = "Lola";
// const m2 = "Zeus";
// const m3 = "Toddy";
// const m4 = "Roro";

// resultElement.innerHTML += `<li>${m1} </li>`;
// resultElement.innerHTML += `<li>${m2} </li>`;
// resultElement.innerHTML += `<li>${m3} </li>`;
// resultElement.innerHTML += `<li>${m4} </li>`;

const nameList = ["Lola", "Zeus", "Toddy", "Roro"];
console.log(nameList[2]);
console.log(nameList[3]);


//empty array 
const ageList = []
ageList[0] = 20;
ageList[1] = 30;
ageList[2] = 35;
ageList[3] = 38;
ageList[0] = 45; //modifies the position 0 again and changes 20 to 45. Can both define the position if it doesn't exist and change it if it does
ageList [20] = 33;
console.log(ageList);

// resultAge.innerHTML += `<li>${ageList[0]} </li>`
// resultAge.innerHTML += `<li>${ageList[1]} </li>`
// resultAge.innerHTML += `<li>${ageList[2]} </li>`
// resultAge.innerHTML += `<li>${ageList[3]} </li>`

//for classico
// debugger;
// for (let pepino = 0; pepino < ageList.length; pepino++){
//   resultAge.innerHTML += `<li>${ageList[pepino]}</li>`
// }

// for (const age of ageList) {
//   console.log(age);
// }

//pepino = name of the index
//'pepino++' is the same as 'pepino = pepino+1'

//the variable pepino only exists inside the for, which means that it can't be used outside without definining it as a global variable


const sectionElement = document.querySelector(".js.adalabers");

const adalabers =[
  {
    name: "julia",
    city: "madrid",
    address: {
      country: "España",
      zip: 28080,
    }
  },
  {
    name: "marina",
    city: "murcia",
    address: {
      country: "USA",
      zip: 28084,
    }
  },
  {
    name: "marcela",
    city: "barcelona",address: {
      country: "Italy",
      zip: 28045,
    }
  }
]

for(let index = 0; index < adalabers.length; index++) {
  sectionElement.innerHTML += `<p>El nombre es ${adalabers[index].name} y la ciuded es ${adalabers[index].city} o ${adalabers[index].address.country}/p>`
}


//the ++ after index means it goes one by one (same as index = index + 1)
// += is for an iteration

for (const adalaberElement of adalabers) {
  sectionElement.innerHTML += `<p>El nombre es ${adalaberElement.address.country}</p>`
}

//casi siempre se puede cambiar un for classico en un for of