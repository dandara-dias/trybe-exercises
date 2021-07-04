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

function indiceMenorValor(array){
    let menor=0, index;

    for(let i=0; i<array.length; i++){
        if(array[i]<=menor){
            menor = array[i];
            index = i;
        }
    }
    return console.log(index);
}

function maiorNome(array){
    let maior=0, name;

    for(let nome of array){
        if(nome.length>maior){
            maior = nome.length;
            name = nome;
        }
    }

    return console.log(name);
}

function repete(array){
    let cont=0, maior=0;
    let quantidade=[];
    let index;

    for(let i=0; i<array.length; i++){
        for(let j=i; j<array.length; j++){
            if(array[i]==array[j]){
                cont++;
            }
        }
        quantidade.push(cont);
        cont=0;
    }

    for(let i=0; i<quantidade.length; i++){
        if(maior<quantidade[i]){
            maior = quantidade[i];
            index=i;
        }
    }

    return console.log(array[index]);
}


////////////////////////////////////////MAIN//////////////////////////////////////////////////

palindromo("arara");
indiceMaiorValor([2, 3, 6, 7, 10, 1]);
indiceMenorValor([2, 4, 6, 7, 10, 0, -3]);
maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);
repete([2, 3, 2, 5, 8, 2, 3]);