const lostNumbers = [4, 8, 15, 16, 23, 42];

const numbersEven = [];
const numbersOdd = [];

function parOimpar(lostNumbers) {
    for (let i=0; i <=lostNumbers.length; i++){
        if (lostNumbers % 2 === 0) {
            lostNumbers.push(numbersEven[i]);
        }
    }
}

console.log(numbersEven);

