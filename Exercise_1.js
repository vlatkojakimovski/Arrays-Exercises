const numbers = arrayFromRange (-10,-4);

console.log(numbers);

function arrayFromRange(min,max){
    const arr = [];
    while (min <= max) {
        arr.push(min);
        min++;
    }
    return arr;
}