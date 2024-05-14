const guessNumber = Math.floor(Math.random() * 10 + 1);

console.log(guessNumber);
const input = prompt("Guess a number between 1 and 10: ");
console.log(typeof input);
if (parseInt(input) === guessNumber) {
  alert("good work");
} else {
  alert(`Not matched the guess number is: ${guessNumber}`);
}
