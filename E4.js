// Extract numbers from a string use Regex
function extractNumbers(str) {
  return str.match(/\d+/g);
  // return Number.parseFloat(str);
}
console.log(extractNumbers("I'm 20. My height is 185 cm"));
