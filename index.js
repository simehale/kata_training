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
 let words = string.split(" ");//split(string)
 words.forEach((word, index, words) => {
 let char = words.split();//split(individual words). creates array of characters inside each word object 
  char.reverse(word);//reverse characters
}
//join each character array with join()
//join each word with join(" "). result: eht htlaets roirraw