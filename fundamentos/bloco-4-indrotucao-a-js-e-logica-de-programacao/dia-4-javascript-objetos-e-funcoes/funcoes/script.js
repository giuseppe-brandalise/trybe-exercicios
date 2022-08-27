//EXERCICIO 1
// function reverseString(string) {
//     let splitString = string.split('');
//     let reverseArray = splitString.reverse();
//     let joinArray = reverseArray.join('');
//     if (joinArray === string) {
//         return true;
//     }
//     return false;
// }

// console.log(reverseString('arara'))

//EXERCICIO 2
// function higgerNumber(array) {
//     let indice = -1;
//     let bigBoy = -20;
//     for (number in array) {
//         if (array[number] > bigBoy) {
//             bigBoy = array[number];
//             indice = number;
//         }
//     }
//     return indice;
// }

// console.log(higgerNumber([2, 5, 3, 4]));

//EXERCICIO 3
// function smallerNumber(array) {
//     let indice = -1;
//     let bigBoy = 5000;
//     for (number in array) {
//         if (array[number] < bigBoy) {
//             bigBoy = array[number];
//             indice = number;
//         }
//     }
//     return indice;
// }

// console.log(smallerNumber([20, 5, 3, 4]));

//EXERCICIO 4
// function biggerName(array) {
//     let indice = -1;
//     let bigBoy = -5000;
//     for (let name in array) {
//         let nameSplit = array[name].split('')
//         if (nameSplit.length > bigBoy) {
//             bigBoy = nameSplit.length;
//             indice = name;
//         }
//     }
//     return indice;
// }

// console.log(biggerName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
