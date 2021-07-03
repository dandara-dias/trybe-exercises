let peca="peão";

switch(peca){
    case "peão":
        console.log("Uma ou duas casas pra frente/diagonal");
        break;
    case "torre":
        console.log("Reto/lados");
        break;
    case "cavalo":
        console.log("L");
        break;
    case "bispo":
        console.log("Diagonal");
        break;
    case "rainha":
        console.log("Qualquer lado/direção");
        break;
    case "rei":
        console.log("Qualquer lado/direção, mas de casa em casa");
        break;
    default:
        console.log("Erro");
}