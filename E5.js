// * merge arrays with concat and apply
function mergeArrays(array) {
  return Array.prototype.concat.apply([], array);
}

// * merge arrays with loop
// function mergeArrays(array) {
//   let output = [];
//   for (let iterator of array) {
//     Array.isArray(iterator) ? mergeArrays(iterator) : output.push(iterator);
//   }
//   return output;
// }

// * merge arrays with flat method
// function mergeArrays(array) {
//   return array.flat(Infinity);
// }
console.log(mergeArrays([12, [23, 231, 12], [1, 2221], 443]));
