console.log("challenge #1");
function dashToCamel(phrase) { 
let words = phrase.split("-");      
words.forEach((word, index) => {
    if (index > 0) {
        const newString = word.charAt(0).toUpperCase() + word.slice(1);
        words[index] = newString;
      }
      
    });
   return words.join("");  
};

console.log(dashToCamel("the-stealth-warrior"));


console.log("challenge #2");
function reverseWords(string) {
 let words = string.split(" ");
 words.forEach((word, index) => {
   const char = word.split("");
   const newOrder = char.reverse().join("");
   words[index] = newOrder;
  });
return words.join(" ");
}

console.log(reverseWords("the stealth warrior"))


console.log("challenge #3");
function removeOccurrence(a, b) {
  let newArray = a.filter((element) => {
    element !== b.element;
    return true
  });
  return newArray;
  };

  console.log(removeOccurrence([1,2], [1]));
  //console.log(`arrayDiff(${a}, ${b}), ${newArray}, "a was ${a}, b was ${b}"`);

  
  //need arrow function



//Examples assert.deepEqual(arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
    //assert.deepEqual(arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
    //assert.deepEqual(arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
    //assert.deepEqual(arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
    //assert.deepEqual(arrayDiff([], [1,2]), [], "a was [], b was [1,2]");
    //assert.deepEqual(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")