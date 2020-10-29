'use strict';
// hidden number value
const genNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = genNumber;
// click event for check box

document.querySelector('.btn-check').addEventListener('click', function () {
  var input = Number(document.querySelector('.guess').value);
  var match = Number(document.querySelector('.number').textContent);

  if (input === match) {
    document.querySelector('.message').textContent = 'correct answer';
     document.getElementById('h1').textContent ='You Won';
    document.getElementById('h1').style.color ='black';
    document.querySelector('body').style.backgroundColor = '#60b347';
     document.querySelector('.right').style.borderLeft = '2px solid white';
      document.querySelector('.empty').style.backgroundColor = 'white';
       document.querySelector('.number').style.color = 'yellow';
       document.querySelector('.message').style.color = ' green';
  } 
  
  else if (score >1) {
    if (input > match) {
      document.querySelector('.message').textContent = ' answer is too High';
      score--;
      document.querySelector('#score').textContent = score;
    } else if (input < match) {
      document.querySelector('.message').textContent = 'answer is too Low';
      score--;
      document.querySelector('#score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = ' YOU LOST';
    
  }
});


// resetting the game
// document.querySelector('.btn-again').addEventListener('click', function () {
 
//   document.querySelector('body').style.backgroundColor = 'black';

//   document.getElementById('h1').textContent = 'Guess My Number!';

//   document.getElementById('h1').style.color = 'white';

//   document.querySelector('.number').textContent = genNumber;

//   document.querySelector('.message').textContent = 'start guessing...';

//   document.querySelector('.message').style.color = 'red';

//   document.querySelector('#score').textContent = 20;

// });