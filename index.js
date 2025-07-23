const newString = "";

function dashToCamel(phrase) { 
let words = phrase.split("-");      
words.forEach((word, index) => {
    if (index == 0) {
        return word;
    } else {
        toUpperCase(word);
    }
            
    });
}
