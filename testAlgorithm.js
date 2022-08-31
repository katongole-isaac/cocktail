const data = ["ab1", "bc1", "cd1", "cv"];

const createLine = (array) => {
  let lineItem = [];
  let count = 0;

  for (let index = 0; index < array.length; index++) {
    if (lineItem.length % 3 === 0 && lineItem.length !== 0) {
      console.log(lineItem);
      count += 1;
      lineItem = [];
      lineItem.push(array[index]);
      continue;
    }

    if (array[array.length - 1] === array[index] && lineItem.length < 3) {
      lineItem.push(array[index]);
      count += 1;
      console.log(lineItem);
      continue;
    }

    // if(lineItem.length < 3){
    //   lineItem.push(array[index]);
    //     console.log(lineItem);
    // }
    lineItem.push(array[index]);
  }
  return count;
};
console.log(createLine(data));
