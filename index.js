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
 words.forEach(word) // Go for it
}
//split(string)
//split(individual words). creates array of characters inside each word object
//join each character array with join()
//join each word with join(" "). result: eht htlaets roirraw