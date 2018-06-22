function factorialize(num) {
  if (num>=0){
    let result = 1;
    while (num>0) {
      result *= num;
      num--;
      factorialize(num);
    }
    return result;
  }
  return false;
}

factorialize(5);
