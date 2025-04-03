/* While Loop Review: Three Guesses */

// Define a variable answer, set equal to a random number between 1 and 10
// Define a variable guess, set equal to 0
// Define a variable guessCount, set equal to 0
// Let the user guess WHILE guessCount is less than 4
// Add one to guessCount
// Set guess equal to the user input after "Guess my number"
// If guess is equal to answer, say "Right!" and break the loop
// Otherwise say "Wrong!"
// End the loop
// If guessCount is equal to 4, say "Out of guesses. The number was ANSWER"

/* For Loop Conversion */

// Rewrite this as a for loop. 

var answer = Math.floor(Math.random()*10)+1;
var guess = 0;
for (let guessCount = 0; guessCount<4; guessCount++){
guess = prompt("Guess my number");
if (guess==answer){
alert("Right!");
break;
}
else alert("Wrong!");
if (guessCount == 3) alert("Out of guesses. The number was " + answer + ".");
}
