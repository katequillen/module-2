'use strict';

const namePer = "Kit";
const age = 36;

const person = {
    name : "Kit",
    age : 36,
    address : {
        city: "Collado Mediano" 
    },
}
//every characteristic needs a comma after it


console.log(person.name);
console.log(person["age"]);
//both of the following forms are okay, they do the exact same thing
console.log(person.address.city);
console.log(person['address'].city);

//an obj can be given an empty value and later filled in, as below 
const car = {};
car.color = "blue";
car.year = 2021;

const proCar = "color";
console.log(car);
console.log(car[proCar]);
console.log(car["color"]);

function productStock() {
    console.log("el stock es bajo");    
}

const product = {
    nameProduct : "cafetera",
    price : 1500,
    stock : productStock,
    paint : function () {
        console.log(`El producto es ${this.nameProduct} y el precio es ${this.price}`)
    }
}
product.stock();
product.paint();

//"this" always goes with an anonymous function, not an arrow function

//

const product = {
    nameProduct : "cafetera",
    stock : () => {
        console.log("el stock es bajo");
    }
}
product.stock();


//both of the above manners to call the stock object are correct
//in order to call a function you always need the parentheses