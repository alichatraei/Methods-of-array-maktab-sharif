// Combine two or more arrays and sort them
function combineArrays(...arrays) {
  return Array.prototype.concat(...arrays).sort();
}
console.log(combineArrays([2, 3, 4, 5], [22, 3, 5, 23, 12]));
