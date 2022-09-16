window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}

const testNumbers = (value1, value2) => {
  if (value1 === '' || value2 === '') {
    throw new Error('Por favor preencha ambos os inputs');
  } else if (isNaN(value1) || isNaN(value2)) {
    throw new Error('Por favor preencher apenas com números');
  }
}




function sum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  try {
    testNumbers(value1, value2)
    const result = Number(value1) + Number(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch(error) {
    alert (error.message);
  } finally {
  document.getElementById('value1').value = '';
  document.getElementById('value2').value = '';
  }
}
