// -----part 2----- Question 1!!

// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

function addToZero(arr) {
  let answer = [];
  for (let i=o; i < arr.length; i++){
    for (let j = 0; j < arr.length; j++){
      if(arr[i] + arr[j] ===0){
        answer.push(arr[i])
      }
      if(answer.length>0){
        return true;
      }
    }
   return false;
   
  }
  
}

/////////////////Question 2///////////

// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.
// for example:
// hasUniqueChars("Monday");
// // -> True

// hasUniqueChars("Moonday");
// // -> False

function hasUniqueChars(string) {
  let uniqueChars = new Set([]);
  for (let i = 0; i < string.length; i++){
    uniqueChars.add(string[i]);
  }
  return uniqueChars.size == string.length;
//////////////Question 3////////

  // Write a function to check a sentence to see if it is a pangram or not.

// For example:

// isPangram("The quick brown fox jumps over the lazy dog!");
// // -> True

// isPangram("I like cats, but not mice");
// // -> False
  
function isPangram(string) {
  const alphabet = ['a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,']

  for (letter in alphabet) {
    if (strArr.includes(alphabet[letter])) {
      return false;
    }
  return true;
}

  console.log(isPangram('The quick brown fox jumps over the lazy dog.'))

//////////////////////Question4////////

  
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

// For example:

// findLongestWord(["hi", "hello"]);
// // -> 5
  

function findLongestWord(arr) {
  let longestword = ""; 
   for(word in arr);{
    if (arr[word].length >= word.length){
      longestword = arr[word]
    }
  }
  return longestword.length;

}
}

findLongestWord([ "hi", "hello"]);

console.log(findLongestWord(["hi", "hello"]));
