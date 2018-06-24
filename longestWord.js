function findLongestWordLength(str) {
  let array = str.split(' ');
  let high = array[0];
  for(let i=1; i<array.length; i++){
    if(array[i].length>high.length){
      high = array[i];
    }
  }
  return high.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
