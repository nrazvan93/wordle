import React from 'react';

function InputForm({ onWordSubmit }) {
  const [guessInput, setGuessInput] = React.useState('');

  function inputHandler(input) {
    if (input.length < 6) {
      setGuessInput(input.toUpperCase());
    }
  }

  function correctSize(input) {
    return input.length == 5;
  }

  return (
    <div>
      <form
        className='guess-input-wrapper'
        onSubmit={(event) => {
          event.preventDefault();
          if (correctSize(guessInput)) {
            onWordSubmit(guessInput);
            setGuessInput('');
          }
        }}
      >
        <label htmlFor='guess-input'>Enter guess:</label>
        <input
          id='guess-input'
          type='text'
          value={guessInput}
          onChange={(event) => {
            inputHandler(event.target.value);
          }}
        />
      </form>
    </div>
  );
}

export default InputForm;
