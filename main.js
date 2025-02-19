const buttons = document.querySelectorAll('#button-container button');
const buttonContainer = document.querySelector('#button-container');
const buttonsArray = Array.from(buttons);
const wordDisplay = document.querySelector('#word-display');
const startGameButton = document.querySelector('#start-game');
buttonContainer.style.display = 'none';

function startGame() {}

/* function handleButtonClick(button) {
  const word = getRandomWord();
  console.log(word);
} */

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

// Allows clicking on buttons
/* buttonsArray.forEach((button) => {
  button.addEventListener('click', () => {
    handleButtonClick(button);
  });
}); */

// Allows pressing A-Z on
/* window.addEventListener('keydown', (event) => {
  const letter = event.key.toUpperCase();

  if (/^[A-Z]$/.test(letter)) {
    const pressedButton = buttonsArray.find(
      (button) => button.innerText === letter
    );
    pressedButton.click();
  }
}); */
