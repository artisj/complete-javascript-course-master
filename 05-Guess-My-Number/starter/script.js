'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number! 😎';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let score = 20;
let highscore = 0;
const secretnumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  console.log(score);

  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No number given';
  } else if (guess === secretnumber && score >= 1) {
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess > secretnumber && score >= 1) {
    document.querySelector('.message').textContent = '⏫ Too High!';
    score--;
  } else if (guess < secretnumber && score >= 1) {
    document.querySelector('.message').textContent = '⏬ Too Low!';
    score--;
  }

  if (score < 1) {
    document.querySelector('.message').textContent = 'You lose';
  }
  document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  //document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
