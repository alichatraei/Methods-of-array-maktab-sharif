// Remove duplicate items in an array (oldway)
// function removeDuplicateItems(array) {
//   const result = [];
//   for (let i = 0; i < array.length; i++) {
//     let exists = false;
//     for (j = 0; j < result.length; j++) {
//       if (array[i] === result[j]) {
//         exists = true;
//         break;
//       }
//     }
//     if (!exists) {
//       result.push(array[i]);
//     }
//   }
//   return result;
// }
// * use newest way
function removeDuplicateItems(array) {
  return [...new Set(array)];
}
console.log(removeDuplicateItems([23, 4, 12, 4, 5]));
