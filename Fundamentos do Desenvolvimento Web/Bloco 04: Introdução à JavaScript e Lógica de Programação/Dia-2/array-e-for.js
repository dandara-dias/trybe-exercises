let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma=0, maior=0;
let mediaAritmetica;

for(let i=0; i < numbers.length; i++){
    console.log(numbers[i]);
    soma += numbers[i];
    if(numbers[i]>maior){
        maior = numbers[i];
    }
}

mediaAritmetica = soma/numbers.length;

console.log(soma);
console.log(mediaAritmetica);

if(mediaAritmetica>20){
    console.log("valor maior que 20");
} else{
    console.log("valor menor ou igual a 20");
}

console.log(maior);