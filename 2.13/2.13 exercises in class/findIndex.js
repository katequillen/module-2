//FINDINDEX

const nombreBuscado = "lucia";
const studentLucia = students.findIndex(
  (student) => student.name.toLowerCase() === nombreBuscado.toLowerCase
);

console.log("Estudiante lucia" + studentLucia);
console.log(students);

students.splice(studentLucia, 1);
console.log(students);
