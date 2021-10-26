// const number = [2, 4, 6, 15, 22, 21];

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

const number = [2, 4, 6, 15, 22, 21];

const result = number.map(x => x * x);
console.log(result);

const student = [
    { roll: 01, name: "tanvir", gender: "male" },
    { roll: 02, name: "galib", gender: "male" },
    { roll: 03, name: "daud", gender: "male" },
    { roll: 04, name: "ashraf", gender: "male" },
    { roll: 05, name: "sonia", gender: "female" },
];
// by loop
// const studentsName =[];
// for (let i = 0; i < student.length; i++) {
//     const students = student[i];
//     const name= students.name
//     studentsName.push(name);
//     console.log('students ',name);    
// };
// console.log('studentsName ',studentsName);

// by map
const studentsName = student.map(s => s.name);
console.log(studentsName);



// filter
// const number = [2, 4, 6, 15, 22, 21];
const evenNum = number.filter(x => {
    if (x % 2 === 0) {
        return x;
    }
});
console.log(evenNum);

// const student = [
//     {roll: 01, name: "tanvir", gender: "male"},
//     {roll: 02, name: "galib", gender: "male"},
//     {roll: 03, name: "daud", gender: "male"},
//     {roll: 04, name: "ashraf", gender: "male"},
//     {roll: 05, name: "sonia", gender: "female"},
// ];

const badStudents = student.filter(s => {
    if (s.roll > 3) {
        return s;
    }
});
console.log(badStudents);



// Find
// const number = [2, 4, 6, 15, 22, 21];
const isthere = number.find(x => {
    if (x % 2 === 0) {
        return x;
    }
});
console.log(isthere);