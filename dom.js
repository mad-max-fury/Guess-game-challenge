"use strict";
// hidden number value 
const genNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
document.querySelector('.number').textContent = genNumber;
// click event for check box

 document.querySelector('.btn-check').addEventListener('click', function(){
   var input = Number(document.querySelector('.guess').value);
   var match = Number(document.querySelector('.number').textContent);
console.log(typeof input,typeof match,);
if (input == match ) {
  document.querySelector('.message').textContent = 'correct answer';
  // document.querySelector('.message').textContent.style = ;

  
}else if(input > match){
document.querySelector('.message').textContent = ' answer is too High';
score--;
console.log(score);
score = document.querySelector('.score').textContent;
}else if(input < match){
document.querySelector('.message').textContent = 'answer is too Low';
score--;
score = document.querySelector('.score').textContent;
};
 });
