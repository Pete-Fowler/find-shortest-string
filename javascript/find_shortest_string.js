/*
PROBLEM: Given an array of strings, return the shortest string. If two are 
equal, return the one that comes first.

APPROACH: Input is array of strings. Output is a string. Pseudocode:
loop through the array
  for the string at each index
    convert it to an array
    get the length
    if the length is shorter than the stored shortest length
      store current value as the shortest
    continue loop
  return shortest
*/


function findShortestString(arr) {
  
  const string = arr.reduce((last, current) => {
    return current.split('').length < last.split('').length ? current : last;
  });
  
  return string;
}

if (require.main === module) {

  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

}

module.exports = findShortestString;


