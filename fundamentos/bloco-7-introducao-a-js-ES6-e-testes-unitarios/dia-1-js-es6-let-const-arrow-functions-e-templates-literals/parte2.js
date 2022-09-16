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

// const longestWord = (sentence) => {
//     let THElongest = '';
//     const words = sentence.split(' ');
//     for (word of words) {
//         (word.length > THElongest.length) ? THElongest = word : THElongest = THElongest;
//     }
//     return THElongest;
// }

// console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'))

//EXERCICIO 4

const substituaX = (name) => {
    const sentence = `Tryber x aqui!`;
    let newSentence = ``;
    for (letter of sentence) {
        (letter === 'x') ? newSentence += name : newSentence += letter;
    }
    return newSentence;
}

const minhasSkills = (otherFunction) => {
    const skills = [`JavaScript`, `HTML`, `CSS`];
    return `${otherFunction}
    Minhas três principais habilidades são:
    -${skills[0]};
    -${skills[1]};
    -${skills[2]};`
}

console.log(minhasSkills(substituaX(`Giuseppe`)));