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

function hasUniqueChars(string) {
  let uniqueChars = new Set([]);
  for (let i = 0; i < string.length; i++){
    uniqueChars.add(string[i]);
  }
  return uniqueChars.size == string.length;
//////////////Question 3////////

function isPangram(string) {
  const alphabet = ['a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,']

  for (letter in alphabet) {
    if (strArr.includes(alphabet[letter])) {
      return false;
    }
  return true;
}


//////////////////////Question4////////


function findLongestWord(arr) {
  let longestword = ""; 
   for(word in arr);{
    if (arr[word].length >= word.length){
      longestword = arr[word]
    }
  }
  return longestword.length;

}
}}

findLongestWord([ "hi", "hello"]);

console.log(findLongestWord(["hi", "hello"]));