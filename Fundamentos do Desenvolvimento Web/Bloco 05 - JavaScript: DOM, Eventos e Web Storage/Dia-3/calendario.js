function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function criaDias(){

    for(let i=0; i<dezDaysList.length; i++){
        let dia = dezDaysList[i];
        let day = document.createElement("li");
        day.innerHTML = dia;
        days.appendChild(day);

        if(dia==24 || dia==31){
            day.className = "day holiday";
        } else if(dia==4 || dia==11 || dia==18){
            day.className = "day friday";
        } else if(dia==25){
            day.className = "day holiday friday";
        } else{
            day.className = "day";
        }
        day.addEventListener("mouseover", zoomIn);
        day.addEventListener("mouseout", zoomOut);
    }
}

criaDias();

function recebeFeriado(feriados){
    let botao = document.createElement("button");
    let classe = document.querySelector(".buttons-container");
    botao.innerHTML = feriados;
    botao.id = "btn-holiday";
    classe.appendChild(botao);
}

recebeFeriado("Feriados");

let botaoFeriados = document.querySelector("#btn-holiday");
botaoFeriados.addEventListener("click", corDeFundo);

function corDeFundo(){
    let feriado = document.querySelectorAll(".holiday");

    for(let i=0; i<feriado.length; i++){
        if(feriado[i].style.backgroundColor == "white"){
            feriado[i].style.backgroundColor = "rgb(238,238,238)";
        } else{
            feriado[i].style.backgroundColor = "white";
        }
    }
}

function recebeSexta(sexta){
    let botao = document.createElement("button");
    let classe = document.querySelector(".buttons-container");
    botao.innerText = sexta;
    botao.id="btn-friday";
    classe.appendChild(botao);
}

recebeSexta("Sexta-feira");

let botaoSexta = document.querySelector("#btn-friday");
botaoSexta.addEventListener("click", mudaTexto);

function mudaTexto(){
    let diasSexta = [4, 11, 18, 25];
    let sexta = document.querySelectorAll(".friday");

    for(let i=0; i<sexta.length; i++){
        if(sexta[i].innerText != "Sextou"){
            sexta[i].innerText = "Sextou";
        } else{
            sexta[i].innerText = diasSexta[i];
        }
    }
}

function zoomIn(event){
    event.target.style.fontSize = "1.5em";
}

function zoomOut(event){
    event.target.style.fontSize = "1em";
}
