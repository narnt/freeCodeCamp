function repeatStringNumTimes(str, num) {
  let sum = '';
  while(num>0){
    sum += str;
    num--;
    repeatStringNumTimes(str, num);
  }
  return sum;
}

repeatStringNumTimes("abc", 3);
