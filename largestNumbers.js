function largestOfFour(arr) {
  let containLargest = [];
  for(let i = 0; i<arr.length; i++){
    let largest = arr[i][0];
    for(let j = 0; j<arr[i].length; j++){
      if(Number(largest)<Number(arr[i][j])){
        largest = arr[i][j];
      }
    }
    containLargest.push(largest);
  }
  return containLargest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
