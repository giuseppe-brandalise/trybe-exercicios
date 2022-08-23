//EXERCICIO 1
// let fatorial = 1
// for (let index = 10; index > 0; index -= 1) {
//     fatorial = fatorial * index;
// }
// console.log(fatorial);

//EXERCICIO 2
// let word = 'tryber';
// let newWord = '';
// for (let index = word.length - 1; index >= 0; index -= 1) {
//     newWord = newWord + word[index];
// }
// console.log(newWord);

//EXERCICIO 3
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maior = '';
// let menor = 'afraegasrhyrwasfaygdfakghfyuwe3abvuoijag';
// for (let index = 0; index < array.length; index += 1) {
//     if (array[index].length > maior.length) {
//         maior = array[index];
//     }
//     if (array[index].length < menor.length) {
//         menor = array[index];
//     }
// }
// console.log(maior);
// console.log(menor);

// //EXERCICIO 4
// let maiorPrimo = 0;
// let primo = true;
// for (let index = 2; index <= 50; index += 1) {
//     for (let index2 = 2; index2 <= index / 2; index2 += 1) {
//         if (index % index2 === 0) {
//             primo = false;
//             break;
//         } else {
//             primo = true;
//         }
//     }
//     if (primo) {
//         if (index > maiorPrimo){
//             maiorPrimo = index;
//         }
//     }
// }
// console.log(maiorPrimo);