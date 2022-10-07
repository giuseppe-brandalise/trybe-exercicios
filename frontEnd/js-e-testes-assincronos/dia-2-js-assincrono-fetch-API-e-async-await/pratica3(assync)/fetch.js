//CONTINUANDO COM O CÓDIGO DA PRAICA 2

// const fetch = require('node-fetch');

// const fetchJoke = async () => {
// const url = 'https://api.chucknorris.io/jokes/random?category=dev';

// fetch(url)
// .then((response) => response.json())
// .then((data) => console.log(data.value))
// .catch((error) => console.log(`Algo deu errado :( \n${error}`));
// }

// fetchJoke();

//NO PRIMEIRO SÓ TEM O ASSYNC

//DUAS MANEIRA DE SE USAR O ASYNC AWAIT
//COM .then() E .catch()

// const fetch = require('node-fetch');

// const fetchJoke = async () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   const result = await fetch(url)
//     .then((response) => response.json())
//     .then((data) => data.value)
//     .catch((error) => `Algo deu errado :( \n${error}`);
  
//   console.log(result);
// };

// fetchJoke();

//COM O try E catch

const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
}

fetchJoke();