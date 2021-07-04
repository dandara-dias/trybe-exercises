function palindromo(string){
    let array=[];
    let str;

    for(let i=0; i<string.length; i++){
        array.push(string[string.length-1-i]);
    }
    str = array.join("");
    if(str === string){
        console.log("true");
    } else{
        console.log("false");
    }
}


////////////////////////////////////////MAIN//////////////////////////////////////////////////

palindromo("arara");