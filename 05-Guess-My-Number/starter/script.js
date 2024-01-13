'use strict';


let value = 10;

//  document.querySelector('.check').addEventListener('click',function(){
//     const doc =  document.querySelector('.guess').value;
//     console.log(doc)
//  })

const number = Math.trunc(Math.random()*20)+1;
document.querySelector('.number').textContent = number
console.log(number)


document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    
    if(!guess){
        document.querySelector('.message').textContent = '⛔ No Number!';

    }
    
})


 
