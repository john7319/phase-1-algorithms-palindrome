function isPalindrome(word) {
  // Write your algorithm here
  word.toLowerCase()
  const newWord = word.split('').reverse().join('')
  if (word === newWord){
    return true;
  }
  else{
    return false;
  }
}

/* 
  Add your pseudocode here
  function isPalindrome(word)
    const newWord = word.split('').reverse().join('')
    if (newWord === word)
      return true
    else
      return false
  
*/

/*
  Add written explanation of your solution here
  1. call the value in the function parameter and reuse it in the fuction 
  2. Split the word into individual letters
  3. Reverse the letters and then join to form a word
  3. use an if statement to check if the values are equal and return true
  4. else return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
