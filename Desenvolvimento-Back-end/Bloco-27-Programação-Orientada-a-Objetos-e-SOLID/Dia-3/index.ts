import Person from "./Person";
import Student from "./Student";
import Subject from "./Subject";
import Teacher from "./Teacher";

const estudante1 = new Student('Estudante Um', new Date('2005/03/17'));
const estudante2 = new Student('Estudante Dois', new Date('2006/07/19'));
console.log(estudante1);
console.log(estudante2);

const materia1 = new Subject('Matemática');
const materia2 = new Subject('História');

const professor1 = new Teacher('Professor Um', new Date('1980/03/30'), 2000, materia1);
const professor2 = new Teacher('Professor Dois', new Date('1982/04/21'), 2000, materia2);
console.log(professor1);
console.log(professor2);

// const pessoa1 = new Person('Pessoa Um', new Date('2002/03/19')); erro, pois não é possível criar uma instância de uma classe abstrata