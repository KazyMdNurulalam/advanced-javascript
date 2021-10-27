function counter (){
    let plate = 0;
    return function(){
        plate++;
        return plate;
    } 
};
const dim = counter();
const rost = counter()

console.log('dim',dim());
console.log('rost',rost());
console.log('rost',rost());
console.log('rost',rost());
console.log('rost',rost());
console.log('dim',dim());