//EXERCICIO 1

const testingScope = escopo => {
    if (escopo === true) {
      let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
      ifScope = `${ifScope}  ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      let elseScope = `Não devo ser utilizada fora do meu escopo (else)`;
      console.log(elseScope);
    }
  }

  testingScope(true);

  // EXERCICIO 2

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const sortOddsAndEvens = (array) => {
    return array.sort(function(a, b){return a - b});
  }

  let newArray = sortOddsAndEvens(oddsAndEvens);

  let text = `Os números `;

  for (let index = 0; index < newArray.length; index += 1) {
    text += `${newArray[index]},`;
  }

  console.log(`${text} se encontram ordenados de forma crescente!`);