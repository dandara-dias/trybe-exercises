let n=5;
let array=[];
let str, meio;

for(let i=0; i<n; i++){
    array.push(" ");
}

if(n%2!=0){
    meio=Math.floor((array.length)/2);

    for(let i=0; i<=meio; i++){
     array[meio+i] = "*";
     array[meio-i] = "*";
     str = array.join("");   
     console.log(str);
    }
} else{
    meio=(array.length)/2;

    array[meio] = "*";
    array[meio-1] = "*";
    str = array.join("");   
    console.log(str);

    for(let i=1; i<meio; i++){
     array[meio+i] = "*";
     array[meio-1-i] = "*";
     str = array.join("");   
     console.log(str);
    }
}