const buttons = document.querySelectorAll('#button-container button');
const buttonContainer = document.querySelector('#button-container');
const buttonsArray = Array.from(buttons);
const wordDisplay = document.querySelector('#word-display');
const startGameButton = document.querySelector('#start-game');
const livesDisplay = document.querySelector('#lives-display');
const winLoseText = document.querySelector('#win-lose-text');
const scoreDisplay = document.querySelector('#score');
buttonContainer.style.display = 'none';

let currentWord = '';
let guessedLetters = [];
let lives = 5; // Set initial lives
let score = 0;

function startGame() {
  const wordContainer = document.querySelector('#word-container');
  wordContainer.innerHTML = ''; // Clear previous word
  currentWord = getRandomWord().toUpperCase();
  guessedLetters = [];
  lives = 5; // Reset lives
  updateLivesDisplay();
  winLoseText.innerText = ''; // Clear win/lose text
  startGameButton.innerText = 'Start Game'; // Reset button text

  // Reset button colors
  buttonsArray.forEach((button) => {
    button.classList.remove('incorrect-guess');
  });

  console.log('The length of the word is: ', currentWord.length);
  for (let i = 0; i < currentWord.length; i++) {
    const span = document.createElement('span');
    span.classList.add('word-letter');
    span.innerText = '_';
    wordContainer.append(span);
  }

  // Allows clicking on letter buttons
  buttonsArray.forEach((button) => {
    button.addEventListener('click', () => {
      handleGuess(button.innerText, button);
    });
  });

  // Allows pressing A-Z on keyboard
  window.addEventListener('keydown', (event) => {
    const letter = event.key.toUpperCase();

    if (/^[A-Z]$/.test(letter)) {
      const pressedButton = buttonsArray.find(
        (button) => button.innerText === letter
      );
      if (pressedButton) {
        handleGuess(letter, pressedButton);
      }
    }
  });
}

function handleGuess(letter, button) {
  if (guessedLetters.includes(letter)) {
    return; // Letter already guessed
  }

  guessedLetters.push(letter);
  const wordContainer = document.querySelector('#word-container');
  const wordLetters = wordContainer.querySelectorAll('.word-letter');

  if (currentWord.includes(letter)) {
    // Correct guess
    for (let i = 0; i < currentWord.length; i++) {
      if (currentWord[i] === letter) {
        wordLetters[i].innerText = letter;
        wordLetters[i].classList.add('correct-guess');
      }
    }
  } else {
    // Incorrect guess
    console.log('Incorrect guess:', letter);
    lives--;
    updateLivesDisplay();
    button.classList.add('incorrect-guess');
    if (lives === 0) {
      console.log('Game Over! You have no more lives.');
      winLoseText.innerText = 'Game Over! You have no more lives.';
      startGameButton.innerText = 'Play Again';
      startGameButton.style.display = 'block';
      buttonContainer.style.display = 'none';
      return;
    }
  }

  // Check if the word is fully guessed
  const isWordGuessed = Array.from(wordLetters).every(
    (span) => span.innerText !== '_'
  );
  if (isWordGuessed) {
    console.log('Congratulations! You guessed the word:', currentWord);
    winLoseText.innerText = 'Congratulations! You guessed the word!';
    startGameButton.innerText = 'Play Again';
    startGameButton.style.display = 'block';
    buttonContainer.style.display = 'none';
    score++;
    updateScore();
  }
}

function updateLivesDisplay() {
  livesDisplay.innerHTML = '';
  for (let i = 0; i < lives; i++) {
    const heart = document.createElement('span');
    heart.innerText = '❤️';
    livesDisplay.append(heart);
  }
}

function updateScore() {
  scoreDisplay.innerText = `Score: ${score}`;
}

startGameButton.addEventListener('click', () => {
  startGameButton.style.display = 'none';
  buttonContainer.style.display = 'flex';
  startGame();
});

function getRandomWord() {
  const words = [
    'Chicken',
    'butter',
    'Massacre',
    'Littlefinger',
    'Speaker',
    'Domination',
    'Grateful',
    'Eminent',
    'Frustration',
    'Happiness',
    'Determination',
    'Satisfaction',
    'Celebration',
    'Innovation',
    'Understanding',
    'Communication',
    'Concentration',
    'Competition',
  ];
  return words[Math.floor(Math.random() * words.length)];
}
