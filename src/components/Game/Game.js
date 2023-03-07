import React from 'react';
import Form from '../InputForm';
import GuessResults from '../GuessResults';
import { checkGuess } from '../../game-helpers';
import Keyboard from '../Keyboard/Keyboard';

import { sample } from '../../utils';
import { WORDS } from '../../data';

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [numberOfGuesses, setNumberOfGuesses] = React.useState(0);
  const [gameWon, setGameWon] = React.useState(false);
  const [answer, setAnswer] = React.useState(() => {
    return sample(WORDS);
  });
  const [usedLetters, setUsedLetters] = React.useState({});

  const handleWordSubmit = (word) => {
    setGuessList((prev) => [...prev, word]);
    let newGuesses = numberOfGuesses + 1;
    setNumberOfGuesses(newGuesses);
    if (answer == word) {
      setGameWon(true);
    }
    const guessDetails = checkGuess(word, answer);
    const newUsedLetters = { ...usedLetters };
    guessDetails.forEach((guess) => {
      newUsedLetters[guess.letter] = guess.status;
    });
    setUsedLetters(newUsedLetters);
  };
  console.info(answer);

  const restartGame = () => {
    setAnswer(sample(WORDS));
    setGuessList([]);
    setNumberOfGuesses(0);
    setGameWon(false);
    setUsedLetters({});
  };

  return (
    <div>
      <GuessResults guessList={guessList} answer={answer}></GuessResults>
      <Form onWordSubmit={handleWordSubmit}></Form>
      <Keyboard usedLetters={usedLetters}></Keyboard>
      {gameWon && (
        <div className='happy banner'>
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {numberOfGuesses} guesses</strong>.
          </p>
          <button onClick={restartGame}>Restart Game</button>
        </div>
      )}
      {!gameWon && numberOfGuesses > 5 && (
        <div className='sad banner'>
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <button onClick={restartGame}>Restart Game</button>
        </div>
      )}
    </div>
  );
}

export default Game;
