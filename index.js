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
//join each character array with join()
//join each word with join(" "). result: eht htlaets roirraw



