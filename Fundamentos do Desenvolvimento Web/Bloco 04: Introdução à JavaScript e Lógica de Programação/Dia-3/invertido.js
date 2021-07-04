let n=5;
let array=[];
let str;

for(let i=0; i<n; i++){
    array.push(" ");
}

for(let i=0; i<n; i++){
    array[n-i] = "*";
    str = array.join("");   
    console.log(str);
}