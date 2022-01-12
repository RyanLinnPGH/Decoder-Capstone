// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift < -25 || shift > 25) {
      return false;
    } // return false if shift is outside parameters
    const result = []; //create an array variable for results
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //create an alphabet variable
    (input = input.toLowerCase().split("")); //split and lowercase the input

    if (!encode) {
      shift = -shift; //check if encode or decode, decode turns to negative
    }

    input.forEach((char, index) => {
      //loop through input
      if (alphabet.includes(char)) {
        //check if the currently checked item is a letter
        alphabet.find((letter, index) => {
          if (char === letter) {
            let newSpot = index + shift; //check the index of the letter and add the shift
            if (newSpot > 25) {
              newSpot = newSpot - 26;}//if the new index is greater then 25, or less than 0, add/subtract to get a number for the alphabet array
            if (newSpot < 0) {
              newSpot = newSpot + 26;} 
            newLetter = alphabet[newSpot]; //sets new character to the alphabet with the new array
            result.push(newLetter); //push new character into the result array
          }
        });
      } else {
        result.push(char); //if the item is not a letter push to result array
      }
    });

    return result.join(""); //join the result array into a string
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
