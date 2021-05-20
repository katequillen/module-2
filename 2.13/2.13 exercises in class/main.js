//INDEXOF, shows which position of the index a certain element is found in. serves for arrays simples.

const number = [14, 12, 21, 64, 23, 12];

const indice = number.indexOf(64);
console.log(indice);

//if the element isn't found in the array, it returns a -1

const indice2 = number.indexOf(100);
console.log(indice2);

// const indice3 = students.indexOf(21);
// console.log(indice3);
//no se puede hacer indexOf can un array de objectos

for (let i = 0; i < number.length; i++) {
  if (number[i] === 64) {
    console.log("position usando for" + i);
  }
}
