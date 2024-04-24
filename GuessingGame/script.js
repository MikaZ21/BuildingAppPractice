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
  
  // inputElement.value retrieves the value as a string, 
  // while randomNumber is a number. So, parse guess to an integer using parseInt() for comparison.
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

  // This line sets the animation CSS property of the feedbackElement to 'none', 
  // effectively disabling any animation that might be currently applied to the element. 
  // Setting it to 'none' removes the animation completely, causing the element to instantly jump to its end state.
    feedbackElement.style.animation = 'none';

  // setTimeout() is used to delay the execution of a piece of code. 
  // After a specified time delay (in this case, 10 milliseconds), 
  // the callback function will be executed. In this callback function, 
  // feedbackElement.style.animation is set to an empty string, effectively removing the inline animation style. 
  // This triggers the browser to recompute the element's styles, thus resetting the animation to its initial state.
  // It's often used to trigger CSS animations to replay when an event occurs, such as when the content of the element changes.
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