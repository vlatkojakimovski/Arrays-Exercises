const numbers = [1,2,3,4];

const output = move (numbers, 1, -1);

console.log(output);

function move(array, index, offset) {
  let tempArr = [...array];
  console.log(tempArr);
  
  const position = index + offset;
  if (position >= tempArr.length || position < 0) {
    console.log('Invalid offset');
  }

  const tempElement = tempArr.splice(index,1)[0];
  tempArr.splice(position, 0 , tempElement);

  return tempArr;
}


