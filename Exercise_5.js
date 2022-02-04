const numbers = [1,2,3,4,1,2,1];

const count = countOccurrences (numbers, 6);

console.log(count);

// function countOccurrences (array, searchElement) {
//     let result = 0;
//     array.forEach(element => {
//       if (element === searchElement) 
//       result++;
//     });
//     return result;
// }


function countOccurrences (array, searchElement) {
  return array.reduce(
    (accumulator, currentElement) => {
      if (currentElement === searchElement) 
        return accumulator+1;
      
      return accumulator;
    },0);

}