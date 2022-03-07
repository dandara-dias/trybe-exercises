export default interface Enrollable {
  matricula: string;
  geraMatricula(): string;
}