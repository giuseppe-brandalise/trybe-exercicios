console.log(document.getElementById('elementoOndeVoceEsta'));

const parentNode = document.getElementById('elementoOndeVoceEsta').parentNode;
parentNode.style.color = 'red';

document.getElementById('primeiroFilhoDoFilho').innerText = 'Primeiro filho do filho';