

const numbers = [3, 3, 5, 8, 7];
    numbers[5] = 10;
    console.log(numbers);
    // for (let index=0; index < 5; index++){
    //     console.log((numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5]) / numbers.length)
    //}
let acc = 0;
for (let index=0; index < numbers.length; index++) {
    acc = numbers [index];
}

var numbersCount = numbers.length;

var average = acc/numbersCount;

console.log(acc);
console.log(numbersCount)
console.log('Average is: ' + average);