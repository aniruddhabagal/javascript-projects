const p1Btn = document.querySelector('#p1Btn')
const p2Btn = document.querySelector('#p2Btn')

const p1Disp = document.querySelector('#p1Disp')
const p2Disp = document.querySelector('#p2Disp')

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

p1Btn.addEventListener('click', function(){

    if(!isGameOver){
        p1Score++;
        if(p1Score === winningScore){
            isGameOver = True;
        }
        p1Disp.textContent = p1Score;
    }
})


p2Btn.addEventListener('click', function(){

    if(!isGameOver){
        p2Score++;
        if(p2Score === winningScore){
            isGameOver = True;
        }
        p2Disp.textContent = p2Score;
    }
})