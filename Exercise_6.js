const numbers = [1,2,3,4,2,6,7,8];

const max = getMax (numbers);

console.log(max);

// function getMax (array) {
//   let maxNumber = 0;
//     for (const iterator of array) {
//       if(maxNumber < iterator)
//       maxNumber = iterator
//     }
//     return maxNumber;
// }


function getMax (array) {
  // return array.reduce((accumulator, element)=> {
  //   if (accumulator < element) 
  //   accumulator = element;  
  //   return accumulator;
  // }, 0)

  return array.reduce((accumulator, element)=> {
  return (element > accumulator) ? element : accumulator;
  });
}
