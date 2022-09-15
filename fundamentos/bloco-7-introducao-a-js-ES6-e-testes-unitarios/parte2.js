//EXERCICIO 1

// const factorial = (number) => {
//     let factorialNumber = number;
//     for (let index = number - 1; index > 0; index -= 1){
//         factorialNumber = factorialNumber * index;
//     }
//     return factorialNumber;
// }

// let result = factorial(4);

// console.log(`${result} é o resultado do fatorial de 4`);

//EXERCICIO 2

const longestWord = (sentence) => {
    let THElongest = '';
    const words = sentence.split(' ');
    for (word of words) {
        (word.length > THElongest.length) ? THElongest = word : THElongest = THElongest;
    }
    return THElongest;
}

console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'))