'use strict';


 const messageFunction = function(message){
    document.querySelector('.message').textContent = message;
 }

//  document.querySelector('.check').addEventListener('click',function(){
//     const doc =  document.querySelector('.guess').value;
//     console.log(doc)
//  })
let highScore = 0;

const number = Math.trunc(Math.random()*20)+1;
document.querySelector('.number').textContent = number


console.log(number)

let score = Number(document.querySelector('.score').textContent);



document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    
    if(!guess){
        messageFunction('⛔ No Number!');

    }else if(guess===number){
         messageFunction('🎉Correct Guess');
         document.querySelector('body').style.backgroundColor = '#60b347'
         document.querySelector('.number').style.width = '30rem'
         document.querySelector('.number').textContent = number
         if(score>highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore
         }
    }else if(guess !== number){
        if(score>1){
            messageFunction(guess>number ? '〽👀 Too high':'〽👀 Too Low');
            score--;

        }
        document.querySelector('.score').textContent = score;
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    }
    
    


    document.querySelector('.again').addEventListener('click',function(){
       document.querySelector('.guess').value = '';
       document.querySelector('body').style.backgroundColor ='#222';
       messageFunction('Start guessing...');
       document.querySelector('.score').textContent = 20;
       document.querySelector('.number').style.width = '15rem'
    })
    
})


 
