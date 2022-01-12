// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
      if (!input || !alphabet || alphabet.length !== 26) return false;        // check for proper use of function                                                            
      for (let i = 0; i < alphabet.length; i++) {   //loop through the 2 alphabets
        for (let j = i + 1; j < alphabet.length; j++) {
          if (alphabet[i] === alphabet[j]) {                               //checks if alphabet any letters match
            return false;   // if they're duplicates, returns false
          }
        }
      }
      const trueAlphabet = 'abcdefghijklmnopqrstuvwxyz';
      const message = [];
      if (encode) {
        for (let i = 0; i < 26; i++) {
          message[trueAlphabet[i]] = alphabet[i]
        }
      }
      else {
        for (let i = 0; i < 26; i++) {
          message[alphabet[i]] = trueAlphabet[i];
        }
      }
      const result = input.toLowerCase().split("").map(letter => {
        if (letter === " ") return " ";
        return message[letter];
      })
      return result.join("");
    }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
