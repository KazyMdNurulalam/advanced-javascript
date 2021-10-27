    //  break method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > 6) {
        break;
    }
// console.log(element);    
}

    //  continue method
const nums = [ 7, 8, 9, 1, 2, 3, 4, 5, 6];
for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element > 6) {
        continue;
    }
console.log(element);    
}