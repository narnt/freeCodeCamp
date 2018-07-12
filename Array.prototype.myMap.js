let s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  let newArray = [];
  this.forEach((item) => newArray.push(callback(item)));
  return newArray;

};

let new_s = s.myMap(function(item){
  return item * 2;
});
