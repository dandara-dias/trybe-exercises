let estados = ["AC", "AL", "AP", "AM", "BA", "CE", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO", "DF"];
let select = document.getElementById("estado");
let enviar = document.querySelector(".submit-btn");

for(let i=0; i<estados.length; i++){
    let opcao = document.createElement("option");
    opcao.innerText = estados[i];
    select.appendChild(opcao);
}

enviar.addEventListener("click", submit);

function submit(event){
    event.preventDefault();

    let validacao = validaInfos();
    
    if(validacao.erroQtd === 0){
        renderData();
    } else{
        validacao.mensagem.unshift("Dados inválidos");

        renderErrorMessages(validacao.mensagem);
    }
}

function validaInfos(){
    let validationsList = {};

    for(let inputName in inputs){
        let isValid = validaInput(inputName);
        
        validationsList[inputName] = isValid;
    }

    let cont=0;
    let mensagem=[];

    for(let i in validationsList){
        if(validationsList[i] === false){
            cont++;
        }

        if(validationsList[i].mensagem){
            cont++;
            mensagem.push(validationsList[i].mensagem);
        }
    }

    return{
        erroQtd: cont,
        mensagem,
    }
}

let validationStrategies = {
    default: defaultValidation,
    date: dateValidation,
    select: selectValidation,
    radio: radioValidation
};

function validaInput(inputName){
    let inputType = inputs[inputName].type;
    let input = document.querySelector(`[name=${inputName}]`);

    if(inputType){
        let validationFunction = validationStrategies[inputType];

        return validationFunction(input, inputName);
    }

    return validationStrategies.default(input, inputName);
}

function renderData(){
    let dataDiv = document.createElement("div");
    let form = document.querySelector("#cv-form");

    dataDiv.className = "data";
    form.prepend(dataDiv);

    for(let name in inputs){
        let inputType = inputs[name].type;
        let input = document.querySelector(`[name=${name}]`);
        let element;

        if(renderStrategies[inputType]){
            element = renderStrategies[inputType](input, dataDiv);
        } else{
            element = renderStrategies.default(input, dataDiv);
        }

        dataDiv.appendChild(element);
    }
}

function defaultValidation(input, name){
    let trimmed = input.value.trim();
    let validation = inputs[name];

    if(validation.required && trimmed.length === 0){
        return false;
    }

    if(validation.maxLength && trimmed.length > validation.maxLength){
        return false;
    }

    return true;
}

function dateValidation(input, name){
    if(input.value.length === 0){
        return{
            message: "A data não foi preenchida!"
        }
    }

    let regex = /^\d\d\/\d\d\/\d\d\d\d$/;

    if(!regex.test(input.value)){
        return{
            message: "Data: formato inválido"
        };
    }

    let splitted = input.value.split("/");
    let day = splitted[0];
    let month = splitted[1];
    let year = splitted[2];

    if(day<0 || day>30){
        return{
            message: "Dia inválido"
        };
    }

    if(month<0 || month>12){
        return{
            message: "Mês inválido"
        };
    }

    if(year<0){
        return{
            message: "Ano inválido"
        };
    }

    return true;
}

function getSelectedOption(select){
    return select.options[select.selectedIndex];
}

function selectValidation(select, name){
    let option = getSelectedOption(select);
    let validation = inputs[name];

    if(validation.required && (!option || option.disabled)){
        return false;
    }

    return true;
}

function radioValidation(radio, name){
    let checked = document.querySelector(`[name=${name}]:checked`);

    if(checked === null){
        return false;
    }

    return true;
}

function renderErrorMessages(messages){
    let form = document.querySelector("#cv-form");
    let messageDiv = document.createElement("div");

    messageDiv.className = "error";
    form.prepend(messageDiv);

    for(let message of messages){
        let p = document.createElement("p");
        p.innerText = message;

        messageDiv.appendChild(p);
    }
}