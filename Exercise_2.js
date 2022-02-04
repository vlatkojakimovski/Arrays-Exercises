const numbers = [1,2,3,4];

console.log(includes(numbers, 5));

function includes (array, searchElement){
    let result = false;
   for (const i of array) {
       if (i === searchElement) 
           result = true;
           break;   
   }
   return result;
}