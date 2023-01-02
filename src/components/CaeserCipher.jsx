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
    <div className='w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800'>
      <div className='px-6 py-4'>
        <h2 className='text-3xl font-bold text-center text-gray-700 dark:text-white'>
          Caeser Cipher
        </h2>

        <h3 className='mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200'>
          Encode your message or password
        </h3>

        <p className='mt-1 text-center text-gray-500 dark:text-gray-400'>
          Shift by any number between 1 - 25
        </p>

        <form onSubmit={caeserCipher}>
          <div className='w-full mt-4'>
            <input
              className='text-center block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300'
              type='text'
              value={input}
              placeholder='Input Message Here'
              aria-label='Input Message Here'
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          <div className='w-full mt-4'>
            <input
              className=' text-center block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300'
              type='number'
              min='0'
              max='25'
              value={shift}
              placeholder='Shift Letters by Number'
              aria-label='Shift Letters by Number'
              onChange={(e) => setShift(e.target.valueAsNumber)}
            />
          </div>

          <div className='flex items-center justify-center mt-4'>
            <a
              href='https://github.com/vincentpalomo/caeser-cipher-react'
              className='text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500'
            >
              github
            </a>

            {/* <input
              type='submit'
              name='Submit'
              className='px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50'
            /> */}

            {/* <button
              type='submit'
              className='px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50'
            >
              Encode
            </button> */}
          </div>
        </form>
      </div>

      <div className='flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700'>
        <span className='text-sm text-gray-600 dark:text-gray-200'>
          Encoded: {encode}
        </span>
      </div>
    </div>
  );
};

export default CaeserCipher;
