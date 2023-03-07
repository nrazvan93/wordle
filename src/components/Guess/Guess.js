import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { answer } from '../Game';

function Guess({ guess, answer }) {
  let listOfChars = [];

  for (let i = 0; i < guess.length; i++) {
    listOfChars.push(guess[i]);
  }

  // if (guess != '') {
  //   const guessDetails = checkGuess(guess, answer);
  // }

  if (guess == '')
    return (
      <p className='guess'>
        <span className='cell'></span>
        <span className='cell'></span>
        <span className='cell'></span>
        <span className='cell'></span>
        <span className='cell'></span>
      </p>
    );

  const guessDetails = checkGuess(guess, answer);
  return (
    <p className='guess'>
      {range(0, 5).map((index) => {
        return (
          <span
            key={Math.random()}
            className={`cell ${guessDetails[index].status}`}
          >
            {listOfChars[index]}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
