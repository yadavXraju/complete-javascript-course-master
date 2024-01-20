'use strict';



const modal = document.querySelector('.modal');
const close_modal =  document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal)



for(let i=0;i<btnsOpenModal.length;i++){
    btnsOpenModal[i].addEventListener('click',function(){
        console.log('Button clicked')
        overlay.classList.remove('hidden')
        modal.classList.remove('hidden');
    })
}

console.log(close_modal)

close_modal.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden')
    
})
console.log(overlay)

overlay.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden')
})

document.addEventListener('keydown',function(e){
    console.log(e.key);
    if(!modal.classList.contains('hidden')){
         if(e.key==='Escape'){
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
         }
    }
})

// document.addEventListener('click',function(e){
//     console.log(e)
// })

// document.addEventListener('keydown',function(e){
//     console.log(e)
// })

// document.querySelector('.button').addEventListener('click',function(){
//     console.log(value)
// })


