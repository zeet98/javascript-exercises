const convertToCelsius = function(tempFar) {
  let newTemp = ((tempFar - 32) * (5/9));
  return Math.round(newTemp * 10) / 10;
};

const convertToFahrenheit = function(tempCelc) {
  let newTemp = ((tempCelc * (9/5)) + 32);
  return Math.round(newTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
