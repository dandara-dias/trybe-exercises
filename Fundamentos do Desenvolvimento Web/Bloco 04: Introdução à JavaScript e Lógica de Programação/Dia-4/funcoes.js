function palindromo(string){
    let array=[];
    let str;

    for(let i=0; i<string.length; i++){
        array.push(string[string.length-1-i]);
    }
    str = array.join("");
    if(str === string){
        return console.log("true");
    } else{
        return console.log("false");
    }
}

function indiceMaiorValor(array){
    let maior=0, index;

    for(let i=0; i<array.length; i++){
        if(array[i]>maior){
            maior = array[i];
            index = i;
        }
    }
    return console.log(index);
}


////////////////////////////////////////MAIN//////////////////////////////////////////////////

palindromo("arara");
indiceMaiorValor([2, 3, 6, 7, 10, 1]);