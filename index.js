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

