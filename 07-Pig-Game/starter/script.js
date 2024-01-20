'use strict';



let countNumberB = 0;
const currentPalyerB = function(){
    const valueB = document.querySelector('#current--1')
    console.log(valueB)
}




const imageChanger1 = function(value){
    if(value==1){
        const image = document.querySelector('.dice')
        image.src = "dice-1.png"
        currentPalyerB(1);
    }else if(value==2){
        const image = document.querySelector('.dice')
        image.src = "dice-2.png"
        currentPalyerB(2);
    }else if(value==3){
        const image = document.querySelector('.dice')
        image.src = "dice-3.png"
        currentPalyerB(3);
    }else if(value==4){
        const image = document.querySelector('.dice')
        image.src = "dice-4.png"
        currentPalyerB(4);
    }else if(value==5){
        const image = document.querySelector('.dice')
        image.src = "dice-5.png"
        currentPalyerB(5);
    }else if(value==6){
        const image = document.querySelector('.dice')
        image.src = "dice-6.png"
        currentPalyerB(6);
    }
}





const functionPalyer2 = function(){
   console.log("Function 2 level")

    const value = function(){
        document.querySelector('.btn--roll').addEventListener('click',function(){
            const randomValue = Math.trunc(Math.random()*6)+1;
            console.log(randomValue)
            imageChanger1(randomValue)
        })

    }

    value()
}









// change value of current box
let countNumberA =0;
const currentPalyerA = function(v){
    const value = document.querySelector('#current--0')
    if(v==1){
        const currentValue = document.querySelector('#score--0');
        
        currentValue.textContent = countNumberA
        value.textContent = 0;
        functionPalyer2()
    }else{
        countNumberA += v
        value.textContent = countNumberA;
    }
    
}





// image change function

const imageChanger = function(value){
    if(value==1){
        const image = document.querySelector('.dice')
        image.src = "dice-1.png"
        currentPalyerA(1);
    }else if(value==2){
        const image = document.querySelector('.dice')
        image.src = "dice-2.png"
        currentPalyerA(2);
    }else if(value==3){
        const image = document.querySelector('.dice')
        image.src = "dice-3.png"
        currentPalyerA(3);
    }else if(value==4){
        const image = document.querySelector('.dice')
        image.src = "dice-4.png"
        currentPalyerA(4);
    }else if(value==5){
        const image = document.querySelector('.dice')
        image.src = "dice-5.png"
        currentPalyerA(5);
    }else if(value==6){
        const image = document.querySelector('.dice')
        image.src = "dice-6.png"
        currentPalyerA(6);
    }
}







document.querySelector('.btn--roll').addEventListener('click',function(){
    const randomValue = Math.trunc(Math.random()*6)+1;
    console.log(randomValue)
    imageChanger(randomValue)
})