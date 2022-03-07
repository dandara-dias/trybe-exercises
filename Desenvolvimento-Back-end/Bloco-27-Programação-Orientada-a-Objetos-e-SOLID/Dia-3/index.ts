import Person from "./Person";
import Student from "./Student";
import Subject from "./Subject";
import Teacher from "./Teacher";

const estudante1 = new Student('Estudante Um', new Date('2005/03/17'));
console.log(estudante1);

const materia1 = new Subject('Matemática');

const professor1 = new Teacher('Professor Um', new Date('1980/03/30'), 2000, materia1);
console.log(professor1);

// const pessoa1 = new Person('Pessoa Um', new Date('2002/03/19')); erro, pois não é possível criar uma instância de uma classe abstrata