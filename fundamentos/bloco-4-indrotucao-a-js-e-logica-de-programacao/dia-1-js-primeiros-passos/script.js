const a = 50;
const b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//-------------------//

const n1 = 20;
const n2 = 15;
const n3 = 30;

if (n1 > n2 && n1 > n3) {
    console.log('n1 é maior');
} else if (n2 > n1 && n2 > n3) {
    console.log('n2 é maior');
} else if (n3 > n2 && n3 > n1) {
    console.log('n3 é maior');
}


//------------------//

const number = -3;

if (number > 0) {
    console.log('positive');
} else if (number < 0) {
    console.log('negative');
} else {
    console.log('zero');
}

//----------------//

const angulo1 = 20;
const angulo2 = 80;
const angulo3 = 80;
let check = false

if (angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
    if (angulo1 + angulo2 + angulo3 === 180) {
        check = true
        console.log(check)
    } else {
        console.log(check)
    }
} else {
    console.log('Ângulo inválido')
}

//----------------//

const pecas = ['peão', 'torre', 'cavalo', 'bispo', 'rei', 'rainha'];
let peca = pecas[Math.floor(Math.random() * 5) + 1];

console.log(peca);

switch (peca) {
    case 'peão':
        console.log('Um para frente ou um para ataque na diagonal na frente');
        break;
    case 'torre':
        console.log('Retas');
        break;
    case 'cavalo':
        console.log('L');
        break;
    case 'bispo':
        console.log('diagonais');
        break;
    case 'rei':
        console.log('Um em qualquer direção');
        break;
    case 'rainha':
        console.log('Retas e diagonais');
        break;
    default:
        console.log('Erro');
        break;
}

//----------------//

let nota = Math.floor(Math.random() * 100) + 1;
let letraNota = ''

if (nota >= 90) {
    letraNota = 'A'
} else if (nota < 90 && nota >= 80) {
    letraNota = 'B'
} else if (nota < 80 && nota >= 70) {
    letraNota = 'C'
} else if (nota < 70 && nota >= 60) {
    letraNota = 'D'
} else if (nota < 60 && nota >= 50) {
    letraNota = 'E'
} else if (nota < 50) {
    letraNota = 'F'
}

console.log(nota)
console.log(letraNota)

//----------------//

const num1 = Math.floor(Math.random() * 100) + 1;
const num2 = Math.floor(Math.random() * 100) + 1;
const num3 = Math.floor(Math.random() * 100) + 1;
let temPar = false;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    temPar = true;
}

console.log('Num1:', num1);
console.log('Num2:', num2);
console.log('Num3:', num3);
console.log(temPar)

//----------------//

const num4 = Math.floor(Math.random() * 100) + 1;
const num5 = Math.floor(Math.random() * 100) + 1;
const num6 = Math.floor(Math.random() * 100) + 1;
let temImpar = false;

if (num4 % 2 === 1 || num5 % 2 === 1 || num6 % 2 === 1) {
    temImpar = true;
}

console.log('Num4:', num4);
console.log('Num5:', num5);
console.log('Num6:', num6);
console.log(temImpar)

//----------------//

const valorCusto = 100;
const valorVenda = 200;
const impostoCusto = valorCusto * 0.2;
const custoTotal = valorCusto + impostoCusto;
const lucro = valorVenda - custoTotal;
console.log(lucro);

//----------------//

let salario = Number(Math.random() * (5600 - 1000) + 1000).toFixed(2);
let inss = 0;
let ir = 0;
let deducao = 0;
console.log (salario)

if (salario <= 1556.94) {
    inss = 0.08;
    salario = Number(salario - (inss * salario)).toFixed(2);
} else if (salario > 1556.94 && salario <= 2594.92) {
    inss = 0.09;
    salario = Number(salario - (inss * salario)).toFixed(2);
} else if (salario > 2594.93 && salario <= 5189.82) {
    inss = 0.11;
    salario = Number(salario - (inss * salario)).toFixed(2);
} else if (salario > 5189.82) {
    salario = Number(salario - 570,88).toFixed(2);
}

if (salario > 1903.98 && salario <= 2826.65) {
    ir = 0.075;
    deducao = 142.8;
    salario = Number(salario - ((salario * ir) - deducao)).toFixed(2);
} else if (salario > 2826.65 && salario <= 3751.05) {
    ir = 0.15;
    deducao = 354.8;
    salario = Number(salario - ((salario * ir) - deducao)).toFixed(2);
} else if (salario > 3751.05 && salario <= 4464.68) {
    ir = 0.225;
    deducao = 636.13;
    salario = Number(salario - ((salario * ir) - deducao)).toFixed(2);
} else if (salario > 4464.68) {
    ir = 0.275;
    deducao = 869.36;
    salario = Number(salario - ((salario * ir) - deducao)).toFixed(2);
}

console.log(salario);
