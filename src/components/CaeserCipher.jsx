import React, { useState, useEffect } from 'react';

const CaeserCipher = () => {
  const [encode, setEncode] = useState('');
  const [input, setInput] = useState('jinx');
  const [shift, setShift] = useState(1);

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

  useEffect(() => {
    let answer = caeserCipher(input, shift);
    setEncode(answer);
  }, [input, shift]);

  return <div>CaeserCipher</div>;
};

export default CaeserCipher;
