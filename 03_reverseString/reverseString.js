const reverseString = function(string) {
  let stringArray = string.split('');
  let reversedArray = stringArray.reverse();
  let newString = reversedArray.join('');

  return newString;
};

// Do not edit below this line
module.exports = reverseString;
