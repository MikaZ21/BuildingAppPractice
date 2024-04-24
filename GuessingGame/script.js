let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

function checkGuess() {
  let inputElement = document.getElementById("guess");
  let feedbackElement = document.getElementById("feedback");
  let attemptsElement  = document.getElementById("attempts");
  let button = document.querySelector('button');

  if( attempts > 0) {
    attempts -= 1;
    attemptsElement.textContent = `You have ${attempts} attempts left to guess!`;

    if (attempts === 0) {
        inputElement.disabled = true;
        button.textContent = "Restart";
        button.style.backgroundColor = "salmon";
        button.onclick = resetGame;
        feedbackElement.textContent = `Game over! You have used all your attempts. The correct number is, "${randomNumber}"`;
        feedbackElement.style.color = "red";
        return; // Exit the function early as the game is over.
    }
   }
  

  let guess = parseInt(inputElement.value);

  if(guess === randomNumber) {
      feedbackElement.textContent = "You guessed the number correctly!";
      feedbackElement.style.color = "green";
      inputElement.disabled = true; // Disable input after correct guess
      button.textContent = "Restart";
      button.style.backgroundColor = "salmon";
      button.onclick = resetGame;

  } else if (guess < randomNumber) {
      feedbackElement.textContent = "Too low! Try again.";
      feedbackElement.style.color = "Blue";
  } else {
      feedbackElement.textContent = "Too High! Try again.";
      feedbackElement.style.color = "orange";
  }

    feedbackElement.style.animation = 'none';
    setTimeout(() => {
    feedbackElement.style.animation = '';
    }, 10); // Reset animation after 10 milliseconds
}

    function resetGame() {
    window.location.reload(); // Reload the page to reset the game
}


// let randomNumber = Math.floor(Math.random() * 100) + 1;
// let attempts = 10;

// function checkGuess() {
//   attempts--;
//   const inputElement = document.getElementById("guess");
//   const feedbackElement = document.getElementById("feedback");
//   const guess = inputElement.value;

//   while (attempts > 0) {
//     if (guess == randomNumber) {
//       attempts = 0;
//       feedbackElement.innerHTML = "Congratulations!";
//       feedbackElement.style.color = "green";
//       break;
//     } else if (guess < randomNumber) {
//       feedbackElement.innerHTML = "Too low! Try again.";
//       feedbackElement.style.color = "red";
//       break;
//     } else {
//       feedbackElement.innerHTML = "Too high! Try again.";
//       feedbackElement.style.color = "red";
//       break;
//     }
//   }

//   if (attempts === 0 && guess !== randomNumber) {
//     feedbackElement.style.color = "red";
//     feedbackElement.innerHTML = `Game over! The correct number is, ${randomNumber}`;
//   }
// }