let alfa=100, beta=70, gama=10;
let triangulo=alfa+beta+gama;

if(alfa < 0 || beta < 0 || gama < 0){
    console.log("Erro");
} else if(triangulo == 180){
    console.log("true");
} else{
    console.log("false");
}