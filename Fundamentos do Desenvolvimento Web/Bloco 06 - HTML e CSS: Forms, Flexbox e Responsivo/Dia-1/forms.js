let estados = ["AC", "AL", "AP", "AM", "BA", "CE", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO", "DF"];

let select = document.getElementById("estado");

for(let i=0; i<estados.length; i++){
    let opcao = document.createElement("option");
    opcao.innerText = estados[i];
    select.appendChild(opcao);
}