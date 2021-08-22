import './node_modules/just-validate/dist/js/just-validate'

let estados = ["AC", "AL", "AP", "AM", "BA", "CE", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO", "DF"];
let select = document.getElementById("estado");
let enviar = document.querySelector(".submit-btn");
let limpar = document.querySelector(".clear-btn");

for(let i=0; i<estados.length; i++){
    let opcao = document.createElement("option");
    opcao.innerText = estados[i];
    select.appendChild(opcao);
}

window.onload = function () {
    new window.JustValidate('.js-form', {
        rules: {
            nome: {
                required: true,
                minLength: 3,
                maxLength: 40,
            }
        },
        messages: {
            nome: 'Erro',
        },
    });
}