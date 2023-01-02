import React, { useState, useEffect } from 'react';

const CaeserCipher = () => {
  const [encode, setEncode] = useState('');
  const [input, setInput] = useState('jinx');
  const [shift, setShift] = useState(1);

  useEffect(() => {
    caeserCipher(input, shift);
  }, [input, shift]);

  function caeserCipher(input, shift) {
    let answer = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (let i = 0; i < input.length; i++) {
      let letter = input[i];
      let oldLetter = alphabet.indexOf(letter);
      let newLetter = oldLetter + shift;
      if (newLetter > 25) {
        newLetter -= 26;
      }
      answer += alphabet[newLetter];
    }
    return answer;
  }

  return <div>CaeserCipher</div>;
};

export default CaeserCipher;
