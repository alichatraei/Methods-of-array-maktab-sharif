// * With Static index

// let deleteAnItem = function (arry, index) {
// arry.splice(index, 1);
// return arry;
// };
let deleteAnItem = function (arry, item) {
  arry.splice(arry.indexOf(item), 1);
  return arry;
};

console.log(deleteAnItem([1, 45, 54, 23, 212, 22], 1));
