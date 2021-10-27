const bonus = 20   // global scope

function sum (fast, second){
    const result = fast + second;   // function scope  block scope
    if (result > 10) {
        return result + bonus;
    }
    return result; 
}
const output = sum(5, 5);
console.log(output);