// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

// console.log('Bem-vinda, ' +info.personagem);

// info['recorrente'] = 'sim';

// console.table(info);

// for (let key in info) {
  // console.log(key);
// }

// for (let value in info) {
//   console.log(info[value]);
// }

// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//   nota: 'O último MacPatinhas',
//   recorrente : 'sim',
// };

// for (let value in info) {
//   console.log(info[value], ' e ', info2[value]);
// }

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

// console.log('O livro favorito de', leitor['nome'], leitor['sobrenome'], 'se chama', leitor['livrosFavoritos'][0]['titulo']);

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
});

console.log(leitor.nome, 'tem', leitor.livrosFavoritos.length, 'livros favoritos.')