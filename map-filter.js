const number = [2, 4, 6, 15, 22, 21];

// by for loop
// const result = [];

// for (let i = 0; i < number.length; i++) {
//     const numbers = number[i];
//     // console.log("number", numbers);
//     const square = numbers * numbers
//     // console.log("square", square);
//     result.push(square)
// };
// console.log(result);


// by map
// function square(element) {
//     return element * element;
// };

// const square = element => element * element;

// const square = x => x * x;

// const result = number.map(square);

const result = number.map(x => x * x);
console.log(result);

        // filter
const evenNum = number.filter(x => {
    if (x % 2 === 0) {
        return x;
    }
});
console.log(evenNum);

        // Find
const isthere = number.find(x => {
    if (x % 2 === 0) {
        return x;
    }
});
console.log(isthere);