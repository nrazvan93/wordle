import React from 'react';

function Keyboard({ usedLetters }) {
  const keyboard = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  ];
  const letters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  return (
    <div>
      {keyboard.map((row) => {
        return (
          <p key={Math.random()} className='guess'>
            {row.map((letter) => {
              return (
                <span
                  key={Math.random()}
                  className={`cell ${usedLetters[letter]}`}
                >
                  {letter}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}
export default Keyboard;
