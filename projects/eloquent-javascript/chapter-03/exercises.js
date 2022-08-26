////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(numOne, numTwo) {
  if (numOne < numTwo){
    return numOne;
  } else if (numTwo < numOne){
    return numTwo;
  } else if (numOne === numTwo){
    return numOne;
  }

}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(number) {
  if (number % 2 === 0){
    return true;
  } else if (number % 2 === 1){
    return false;
  } else if (number < 0){
    return isEven(-number);
  } 

}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char) {
  var count = 0;
  for (var i = 0; i < string.length; i++){
    if(string[i] === char){
      count++
    }
  }
  return count;

}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
  var count = 0;
  for (var i = 0; i < string.length; i++){
    if(string[i] === "B" || string[i] === "b"){
      count++
    }
  }
  return count;

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
