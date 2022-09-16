const counter = document.getElementById('counter');
const button = document.getElementById('button');
const motivational = document.getElementById('motivational');
let contador = 0;
const motivationalQuotes = [`AMAZING`, `GREAT JOB`, `YOU ARE THE BEST`, `HOW CAN YOU BE SO GOOD???`, `DUUUUUDE`]

let counterUp = () => {
    contador += 1;
    counter.innerText = contador;
    let motivationalNumber = Math.floor(Math.random() * (motivationalQuotes.length));
    motivational.innerText = motivationalQuotes[motivationalNumber];
    console.log(motivationalNumber)
}

button.addEventListener('click', counterUp);