console.log('Hello')


const randCol = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
};

function colorize() {
    this.style.backgroundColor = randCol();
    // this.style.color = randCol();
}

const buttons = document.querySelectorAll("button");

for (let button of buttons) {
    button.addEventListener("click", colorize);
}