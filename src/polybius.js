// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function polybius(input, encode = true) {
    
    const polybiusSquare = {                      //create our polybius square obj
      1: { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'},
      2: { 1: 'f', 2: 'g', 3: 'h', 4: 'i/j', 5: 'k'},
      3: { 1: 'l', 2: 'm', 3: 'n', 4: 'o', 5: 'p'},
      4: { 1: 'q', 2: 'r', 3: 's', 4: 't', 5: 'u'},
      5: { 1: 'v', 2: 'w', 3: 'x', 4: 'y', 5: 'z'},
    };

    const message = input.toLowerCase().split(''); //input to array
    const messageNoSpaces = message.filter(nums => nums != ' '); //our array  without spaces
    if(!encode){ //then we decode
      let decodeMessage = '';
      if(messageNoSpaces.length % 2 != 0) return false; //checks for even amount of characters
      for(let index = 0; index < message.length; index += 2){
        
        if(message[index] === ' '){ //if theres a space in the input add it to our decodeMessage
          decodeMessage += ' ';
          index--; //reset index a space since our value was a space
        }else{ decodeMessage += polybiusSquare[message[index + 1]][message[index]]; } //decode
      }
      return decodeMessage;
    }else{ //else we encode
      const encodeMessage = [];
      for(let letter of message){ //checking each letter individually
        if(letter === ' '){ encodeMessage.push(' '); } //save spaces
        for(let c = 1; c < 6; c++){ //cycling each column
          for(let i = 1; i < 6; i++){ //cycling each row
            if(polybiusSquare[c][i].includes(letter)){  //checks if the column/row is equal to letter being looped
              encodeMessage.push(i);
              encodeMessage.push(c);//push column/row combo
            } 
          }
        }
      }
      return encodeMessage.join('');
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
