const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};
  
const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};
  
const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// const addKey = (object, key, value) => object[key] = value
// console.log(lesson2);
// addKey(lesson2, 'turno', 'noite');
// console.log(lesson2);

// const listKeys = (object) => console.log(Object.keys(object));
// listKeys(lesson1);

const listKeys = (object) => console.log(Object.values(object));
listKeys(lesson1);