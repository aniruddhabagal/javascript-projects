const btn = document.querySelector('#btn-1');
const h1 = document.querySelector('h1');



const randCol = () =>{
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}

btn.addEventListener('click', () => {

    const col = randCol();
    document.body.style.backgroundColor = col;
    h1.innerHTML = col;
})



