function destroyer(arr) {
  let newArr = [...arr]
  arr.forEach(item => {if([...arguments].indexOf(item)>-1){newArr.splice(newArr.indexOf(item),1)}})
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
