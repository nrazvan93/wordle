import React from 'react';
import { range } from '../../utils';
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guessList, answer }) {
  return (
    <div className='guess-results'>
      {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => {
        if (guessList[index] === undefined) {
          return <Guess key={Math.random()} guess='' answer={answer}></Guess>;
        }
        return (
          <Guess
            key={Math.random()}
            guess={guessList[index]}
            answer={answer}
          ></Guess>
        );
      })}
    </div>
  );
}

export default GuessResults;
