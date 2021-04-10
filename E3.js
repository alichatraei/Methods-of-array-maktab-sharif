// Remove duplicate items in an array
function removeDuplicateItems(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    let exists = false;
    for (j = 0; j < result.length; j++) {
      if (array[i] === result[j]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      result.push(array[i]);
    }
  }
  return result;
}
console.log(removeDuplicateItems([23, 4, 12, 4, 5]));
