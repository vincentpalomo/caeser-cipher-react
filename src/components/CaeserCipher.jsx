import React, { useState, useEffect } from 'react';

const CaeserCipher = () => {
  const [encode, setEncode] = useState('');
  const [input, setInput] = useState('');
  const [shift, setShift] = useState(0);

  function caeserCipher(input, shift) {
    let answer = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (let i = 0; i < input.length; i++) {
      let letter = input[i];
      if (alphabet.indexOf(letter) < 0) {
        answer += letter;
        continue;
      }
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

  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>Caeser Cipher</h1>
          <p className='py-6'>Encode your message or password here.</p>
          <input
            type='text'
            value={input}
            placeholder='Type here'
            className='input input-bordered input-primary w-full max-w-xs mb-3'
            onChange={(e) => setInput(e.target.value)}
          />
          <p>Shift letters:</p>
          <input
            type='range'
            min='0'
            max='25'
            value={shift}
            className='range'
            step='1'
            onChange={(e) => setShift(e.target.valueAsNumber)}
          />
          <div className='w-full flex justify-between text-xs px-2'>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
          </div>
          <div className='card'>Encoded: {encode}</div>
        </div>
      </div>
    </div>
  );
};

export default CaeserCipher;
