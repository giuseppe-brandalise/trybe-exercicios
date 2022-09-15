const factorial = (number) => {
    let factorialNumber = number;
    for (let index = number - 1; index > 0; index -= 1){
        factorialNumber = factorialNumber * index;
    }
    return factorialNumber;
}

let result = factorial(4);

console.log(`${result} é o resultado do fatorial de 4`);