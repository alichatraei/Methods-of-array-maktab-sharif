// * merge arrays with concat and apply
// function mergeArrays(array) {
//   return Array.prototype.concat.apply([], array);
// }

// * merge arrays with loop
let output = [];
function mergeArrays(array) {
  for (let iterator of array) {
    Array.isArray(iterator) ? mergeArrays(iterator) : output.push(iterator);
  }
  return output;
}

console.log(mergeArrays([12, [23, 231, 12], [1, 2221], 443]));
